export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACK';

export function setStack(stack){ // action creator
    return { 
        type: SET_STACK, 
        stack: stack  
    };
}

export function loadStacks(stacks){ // action creator
    return { 
        type: LOAD_STACKS, 
        stacks: stacks  
    };
}

export function addStack(stack){ // action creator
    return { 
        type: ADD_STACK, 
        stack: stack
    };
}

