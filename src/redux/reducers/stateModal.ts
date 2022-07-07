import { createSlice } from "@reduxjs/toolkit";

export const stateModal = createSlice({
    name: "stateModal",
    initialState: {
        state: false
    },
    reducers: {
        changeState: (state, action) => {
            state.state = action.payload;         
        }
    }
});

export const { changeState } = stateModal.actions;
export default stateModal.reducer;
