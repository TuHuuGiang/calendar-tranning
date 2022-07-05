import { combineReducers } from '@reduxjs/toolkit';
import { stateModal } from './reducers/stateModal';

const rootReducer = combineReducers({
    stateModal: stateModal.reducer
});

export default rootReducer;
