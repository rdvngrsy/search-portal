import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    searchData : "",
}
const searchDataSlice = createSlice({
    name: "searchData",
    initialState,
    reducers:{
        setSearchData: (state, action) => {
            state.searchData = action.payload;
        }
    },

});

export const searchDataReducer = searchDataSlice.reducer;
export const { setSearchData } = searchDataSlice.actions;