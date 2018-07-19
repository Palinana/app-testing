import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

function stack(state = {}, action) { //reducer
    switch(action.type){
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

function stacks(state = [], action) { //reducer
    switch(action.type){
        case LOAD_STACKS:
            return action.stacks;
        case ADD_STACK:         //dublicating the object and giving unique id
            return [...state, {...action.stack, id: state.length }];    
        default:
            return state;
    }
}

export default combineReducers({ stack, stacks});