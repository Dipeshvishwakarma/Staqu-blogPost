import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false
  },
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post.title = action.payload.title;
          post.body = action.payload.body;
        }
      });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      console.log("after delete ", state.posts);
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
      state.isLoading = false;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export const {
  setShowModal,
  addPost,
  updatePost,
  deletePost
} = postSlice.actions;
export default postSlice.reducer;
