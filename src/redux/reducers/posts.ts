import { createSlice } from "@reduxjs/toolkit";
import testImg from "../../assets/img/post.jpg";
import testImg2 from "../../assets/img/post2.jpg";
import testImg3 from "../../assets/img/user.jpg";
import testImg4 from "../../assets/img/contruction.png";

export const post = createSlice({
    name: "post",
    initialState: {
        postList: [
            {
                id: 1,
                title: 'Event 1',
                arrImg: [testImg, testImg2],
                description: 'Test 1',
                start: '2022-07-04'
            },
            {
                id: 22,
                title: 'Event 2',
                description: 'Test 2',
                arrImg: [testImg3],
                start: '2022-07-21'
            },
            {
                id: 3,
                title: 'Event 3',
                description: 'Test 3',
                arrImg: [testImg4],
                start: '2022-07-17'
            }
        ]
    },
    reducers: {
        addPost: (state, action) => {
            state.postList = [...state.postList, action.payload];
        },
        editPost: (state, action) => {
            console.log(action.payload.id);
            let findIndex = state.postList.findIndex(p => p.id === +action.payload.id);
            state.postList.splice(findIndex, 1);
            state.postList.push(action.payload);
        }
    }
});

export const { addPost, editPost } = post.actions;
export default post.reducer;