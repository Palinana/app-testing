import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from '../components/StackList';
import { stacks } from '../data/fixtures'; 

const props = { stacks };

describe('StackList', () => {
    const stackList = shallow(<StackList {...props}/>); 
                                    
    it('renders the correct number of links', () => {  // make sure that the number of rendered cards matches the number in props.stack
        // we receive an array of all cards
        expect(stackList.find('Link').length).toEqual(props.stacks.length)
    });
});