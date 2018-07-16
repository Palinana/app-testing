import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {                 // testing the rendering of the App Component 
    let app = mount(<App />)

    it('renders the app title', () => {
        // console.log(app.debug())                //to see what was mounted (teminal)
        expect(app.find('h2').text()).toEqual('Note to Self');
    });
    
    it('renders the clear button', () => {      //btn Class found in teminal - app.debug() 
        expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
    });

    //group all Form components (test that the form itself exist and has chid components and button)
    describe('when rendering the form', () => {
        it('creates a Form component', () => {
            expect(app.find('Form').exists()).toBe(true); //boolean
        });

        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });
    })

    describe('when creating a note', () => {    // testing the behavior of the App Component 
        let testNote = 'test note';

        beforeEach(() => {          //simulate user typing something first 
            app.find('FormControl').simulate('change', {
                target: { value: testNote }
            });
        }); 

        it('updates the text in state', () => {
            // console.log(app.state());        // grab the text from the return object
            expect(app.state().text).toEqual(testNote);
        });

        describe('user typed a new input and submitting the new note', () => {
            beforeEach(() => {      //simulate user clcking the submit button 
                app.find('.btn').at(0).simulate('click');
            });

            afterEach(() => {       //reset the state using existing clear button 
                app.find('.btn').at(1).simulate('click');   //as before we had testNote twice in the state
            });

            //new note is stored in notes array in the state
            it('adds the new note to state', () => {
                // console.log(app.state());
                expect(app.state().notes[0].text).toEqual(testNote);
            });
            
            //testing the cookie
            describe('remounting the component', () => {
               let app2; //will be assign to a new mounted version of App component 

               beforeEach(() => {
                   app2 = mount(<App />)
               });
               
               it('reads the stored note cookies', () => {
                //    console.log(app2.state())
                   expect(app.state().notes).toEqual([{ text: testNote}]);
               });
            });

            describe('when clicking the cleat button', () => {
                beforeEach(() => {      //simulate user clcking the submit button 
                    app.find('.btn').at(1).simulate('click');
                })

                it('deletes all the notes in state', () => {
                    // console.log(app.state());
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
    }) 
}) 