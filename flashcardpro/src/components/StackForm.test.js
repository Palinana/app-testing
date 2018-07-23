import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from '../components/StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

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
            stackForm.find('FormControl').simulate('change', { target: { value: changeTitle }})
        });

        it('updates the title in the state', () => {
            //console.log(stackForm.state()); //{ title: 'change title', cards: [] }}
            expect(stackForm.state().title).toEqual(changeTitle)
        });
    });

    describe('adding a new card', () => {
        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click')
        });
        //as we ran beforeEach for every it  and as result have 4 cards
        afterEach(() => {
            stackForm.setState({ cards:[] });
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

        describe('updating the card prompt', () => {
            beforeEach(() => {                  //will affect previous descripe test, so afterEach was added to the top
                stackForm.find('FormControl').at(1).simulate('change', { target: {value: changePrompt }})
            });

            it('updates the prompt in the state', () => {
                //console.log(stackForm.state())
                expect(stackForm.state().cards[0].prompt).toEqual(changePrompt)
            });
        });

        describe('updating the card answer', () => {
            beforeEach(() => {                  //will affect previous descripe test, so afterEach was added to the top
                stackForm.find('FormControl').at(2).simulate('change', { target: {value: changeAnswer }})
            });

            it('updates the answer in the state', () => {
                //console.log(stackForm.state())
                expect(stackForm.state().cards[0].answer).toEqual(changeAnswer)
            });
        });

    });

});