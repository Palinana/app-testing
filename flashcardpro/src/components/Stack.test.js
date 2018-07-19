import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../components/Stack'; // rather than testing default file, test singly exported class
import { stack } from '../data/fixtures'; //testing data

const props = { stack };

describe('Stack', () => {
    const stack = shallow(<Stack {...props}/>); // need to provide store - export class
                                    
    it('renders the title', () => {
        // console.log(stack.debug());
        expect(stack.find('h3').text()).toEqual(props.stack.title)
    });

    it('renders a link to go back to home page', () => {
        expect(stack.find('Link h4').text()).toEqual('Back')
    });

    it('renders the correct number of cards', () => {  // make sure that the number of rendered cards matches the number in props.stack
        // we receive an array of all cards
        expect(stack.find('Card').length).toEqual(props.stack.cards.length)
    });
});