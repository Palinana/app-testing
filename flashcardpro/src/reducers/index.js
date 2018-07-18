import { SET_STACK } from '../actions';

function stack(state = {}, action) { //reducer
    switch(action.type){
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

export default stack;