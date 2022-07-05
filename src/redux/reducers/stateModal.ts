import { createSlice } from "@reduxjs/toolkit";

export const stateModal = createSlice({
    name: "stateModal",
    initialState: {
        state: false
    },
    reducers: {
        changeState: (state) => {
            state.state = !state.state
        }
    }
});

export const { changeState } = stateModal.actions;
export default stateModal.reducer;
