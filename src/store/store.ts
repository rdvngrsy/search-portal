import { configureStore } from "@reduxjs/toolkit"
import { loadingReducer } from "./slices/loadingSlice"
import { searchDataReducer } from "./slices/searchDataSlice"


export const store = configureStore({
    reducer: {
      loading:loadingReducer,
      searchData: searchDataReducer,
    }
      
   
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch