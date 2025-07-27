import {configureStore} from "@reduxjs/toolkit";
import {recordSlice} from "../Slicer/RecordSlice";

export const store = configureStore({
    reducer : {
        record : recordSlice.reducer,
    },
});