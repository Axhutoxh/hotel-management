import { createSlice } from "@reduxjs/toolkit";

export interface CommonState {
    value: number
  }

const initialState : CommonState = {
    value:0
}

export const common = createSlice({
    name:'common',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
          },
          decrement: (state) => {
            state.value -= 1
          }, 
    }
})

export const { increment, decrement } = common.actions

export default common.reducer