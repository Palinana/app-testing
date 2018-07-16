import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test note' } };

describe('Note', () => {
  let note = mount(<Note {...props} />); //note={props.note}

  it('renders the note text', () => {
    // console.log(note.debug());
     //find throught yourself and expect p equal to some str
    expect(note.find('p').text()).toEqual(props.note.text); //rather then use hard coded str like 'test note'
  });
});