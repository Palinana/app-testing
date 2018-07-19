import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
    const app = shallow(<App/>);

    it('renders the `FlashaCardPro` title', () => {
        expect(app.find('h2').text()).toEqual('FlashCard Pro')
    });

    it('renders the StackList', () => {
        // console.log(app.debug());
        expect(app.find('Connect(StackList)').exists()).toBe(true)
    });

    it('renders a link to create new stack', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack')
    });
});
