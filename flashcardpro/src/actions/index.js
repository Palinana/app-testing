export const SET_STACK = 'SET_STACK';

export function setStack(stack){ // action creator
    return { 
        type: SET_STACK, 
        stack: stack  
    };
}

