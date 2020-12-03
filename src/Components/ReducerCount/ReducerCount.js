import React, { useState, useReducer } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="text-center">
            <h1>"Reducer Count": {state.count}</h1>
            <br />
            <ButtonGroup disableElevation variant="contained" color="secondary">
                <Button onClick={() => dispatch({ type: 'INCREMENT' })}>Plus</Button>
                <Button onClick={() => dispatch({ type: 'DECREMENT' })}>Minus</Button>
            </ButtonGroup>
        </div>

    );
};

export default ReducerCount;