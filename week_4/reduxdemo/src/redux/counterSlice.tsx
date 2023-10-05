import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment(state){
            state.value++;
        },
        decremet(state){
            state.value--;
        }        
    },
});

export const counterActions = counterSlice.actions;