import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
	name: "loading",
	initialState: {
    requestCount: 0
	},
	reducers: {
    increaseRequestCount: state => {
      state.requestCount++;
    },

    decreaseRequestCount: state => {
      state.requestCount--;
    }
  },
});

export const {increaseRequestCount,decreaseRequestCount} = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;