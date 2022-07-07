import { createSlice } from "@reduxjs/toolkit";

export const infoEvent = createSlice({
    name: "infoEvent",
    initialState: {
        info: {
            id: 0,
            title: '',
            arrImg: [],
            description: '',
            start: ''
        }
    },
    reducers: {
        saveInfo: (state, action) => {
            state.info = action.payload;
        }
    }
});

export const { saveInfo } = infoEvent.actions;
export default infoEvent.reducer;