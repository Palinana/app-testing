import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = { 
    card: {
        prompt: 'test prompt', answer: 'test answer'
    } 
};

describe('Card', () => {
    const card = shallow(<Card {...props} />);

    it('sets `reveal` to be `false`', () => {
        expect(card.state().reveal).toBe(false); 
    });

    it('renders the card propmt', () => {
        expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);    //find element by css class name
    });

    it('renders the card answer', () => {
        expect(card.find('.card-answer h4').text()).toEqual(props.card.answer);    //find element by css class name
    });

    it('renders `text-hidden` class from the card answer', () => {
        expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true);    //find element by css class name
    });

    describe('when clicking on the card', () => {
        beforeEach(() => card.simulate('click'));       //will change class to reveal first

        it('updates `reveal` to be `true`', () => {
            expect(card.state().reveal).toBe(true);     //check that click has happend
        });

        it('applies `text-revealed` class to the card answer', () => {
            expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
        });
    });

});