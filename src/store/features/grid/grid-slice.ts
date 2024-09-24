import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GridState {
  value: number;
}

const initialState: GridState = {
  value: 0
};

const gridSlice = createSlice({
  initialState,
  name: "grid",
  reducers: {
    // decrement
    decrement(state) {
      state.value -= 1;
    },

    // increment
    increment(state) {
      state.value += 1;
    },
    // incrementByAmount
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

export const { decrement, increment, incrementByAmount } = gridSlice.actions;
export const gridReducer = gridSlice.reducer;
