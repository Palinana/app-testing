import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

export class StackList extends Component{
    componentDidMount() { // load only for first time
        if(this.props.stacks.length === 0) this.props.loadStacks(stacks); //json data    
    }

    render() {
        // console.log('stackList props ', this.props)
        return (
            <div>
                {
                    this.props.stacks.map(stack => {
                        return (
                            <Link 
                                to="/stack" key={stack.id} 
                                onClick={() => this.props.setStack(stack)}
                            >
                                <h4>{stack.title}</h4> 
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stacks: state.stacks
    }
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);