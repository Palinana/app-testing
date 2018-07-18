import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Card extends Component{
    constructor() {
        super();
        this.state = {
            reveal: false
        }; 
    }
    render() {
        const { prompt, answer } = this.props.card;
        return (
            <div className="card" onClick={() => this.setState({ reveal: true})}>
                <div className="card-prompt">
                    <h4>{prompt}</h4>
                </div>
                <div className="card-answer">
                    <h4 className={ this.state.reveal ? 'text-revealed' : 'text-hidden'}>
                        {answer}
                    </h4>
                </div>
            </div>
        )
    }
}

export default Card;