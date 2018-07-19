import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addStack } from '../actions';

class StackForm extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            cards: []
        }
    }

    addCard() {
        const { cards } = this.state;
        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({ cards }); //update the state to this local copy
    }

    updateCardPart(event, index, part) {
        const { cards } = this.state;
        cards[index][part] = event.target.value;
        this.setState({ cards });
    }

    addStack() { 
        //console.log('StackForm state ', this.state);
        this.props.addStack(this.state);
    }

    render() {
        return (
            <div>
                <Link to="/" className="link-home">
                    <h4>Back</h4>
                </Link>
                <h4>Create a New Stack</h4>
                <br/>
               <Form inline>
                    <FormGroup>
                        <ControlLabel>Title:</ControlLabel>
                        {' '}
                        <FormControl onChange={event => this.setState({ title: event.target.value })}/>
                    </FormGroup>
                    {
                        this.state.cards.map((card,index) => {
                            return (
                                <div key={card.id}>
                                    <br/>
                                    <FormGroup>
                                        <ControlLabel>Prompt:</ControlLabel>
                                        {' '}
                                        <FormControl onChange={event => {
                                            this.updateCardPart(event, index, 'prompt');
                                        }}/>
                                        {' '}
                                        <ControlLabel>Answer:</ControlLabel>
                                        {' '}
                                        <FormControl onChange={event => {
                                            this.updateCardPart(event, index, 'answer');
                                        }}/>
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
               </Form>
               <br/>
               <Button onClick={() => this.addCard()}>Add Card</Button>
               {' '}
               <Button onClick={() => this.addStack()}>Save and Add the Stack</Button>
            </div>
        )
    }
}


export default connect(null, { addStack })(StackForm);
