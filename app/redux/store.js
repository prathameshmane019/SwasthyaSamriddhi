import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice"
export const store =  configureStore({
    // reducer1:productReducer,
    // reducer2:searchReducer,
    reducer:{
        user: userReducer,
    }
})