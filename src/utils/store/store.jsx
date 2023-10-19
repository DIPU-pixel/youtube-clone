import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import cacheSlice from "../slices/cacheSlice";

const store =configureStore({
    reducer:{
        app:appSlice,
        cache:cacheSlice
    }

})
export default store;