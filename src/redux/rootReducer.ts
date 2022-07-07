import { combineReducers } from '@reduxjs/toolkit';
import { infoEvent } from './reducers/infoEvent';
import { post } from './reducers/posts';
import { stateModal } from './reducers/stateModal';

const rootReducer = combineReducers({
    stateModal: stateModal.reducer,
    postList: post.reducer,
    info: infoEvent.reducer
});

export default rootReducer;
