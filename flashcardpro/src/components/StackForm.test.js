import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from '../components/StackForm';
// import { stack } from '../data/fixtures'; 

describe('StackForm', () => {
    const stackForm = shallow(<StackForm />);

    it('renders the form title', () => {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack')
    });

    it('renders the link to the home page', () => {
        expect(stackForm.find('h4').at(0).text()).toEqual('Back')
    });

    it('renders the From component', () => {
        expect(stackForm.find('Form').exists()).toBe(true)
    });

    it('renders a Button to a new card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card')
    });
    it('renders a Button to a submit the form', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack')
    });

    //form fucntionality
    describe('updating the title', () => {
        beforeEach(() => {                      //onChange
            stackForm.find('FormControl').simulate('change', { target: { value: 'change title' }})
        });

        it('updates the title in the state', () => {
            //console.log(stackForm.state()); //{ title: 'change title', cards: [] }}
            expect(stackForm.state().title).toEqual('change title')
        });
    });

    describe('adding a new card', () => {
        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click')
        });

        it('adds a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        it('renders the prompt section', () => {        //since don't have access to it text
            expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
        });

        it('renders the answer section', () => {        //since don't have access to it text
            expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
        });
    });

});