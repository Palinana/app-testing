import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../components/Stack'; // rather than testing default file, test singly exported class
import { stack } from '../data/fixtures'; //testing data

const props = { stack };

describe('Stack', () => {
    const app = shallow(<Stack {...props}/>); // need to provide store - export class
                                    
    it('renders the title', () => {
        // console.log(app.debug());
        expect(app.find('h3').text()).toEqual(props.stack.title)
    });

    it('renders a link to go back to home page', () => {
        expect(app.find('Link h4').text()).toEqual('Back')
    });

    it('renders the correct number of cards', () => {  // make sure that the number of rendered cards matches the number in props.stack
        // we receive an array of all cards
        expect(app.find('Card').length).toEqual(props.stack.cards.length)
    });
});