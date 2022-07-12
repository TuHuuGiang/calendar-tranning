import { combineReducers } from '@reduxjs/toolkit';
import { infoEvent } from './reducers/infoEvent';
import { post } from './reducers/posts';

const rootReducer = combineReducers({
    postList: post.reducer,
    info: infoEvent.reducer
});

export default rootReducer;
