import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Category extends Component{
    constructor() {
        super();
        this.state = {
            clues: [] 
        }
    }

    componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => this.setState({ clues: json }))  //set clues localy, not to the redux store
    }
    
    render() {
        console.log('category props ', this.props)

        return (
            <div>
                <Link className="link-home" to="/"><h4>Home</h4></Link>
                <h2>{this.props.category.title}</h2>
                {
                    this.state.clues.map(clue => {
                        return (
                            <div key={clue.id}>{clue.question}</div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps, null)(Category);