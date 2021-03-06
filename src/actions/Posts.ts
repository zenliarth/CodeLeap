import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

// ACTIONS

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://dev.codeleap.co.uk/careers/');
  const results = response.data.results;
  return results;
});

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (post: IPost) => {
    const response = await axios.post(
      'https://dev.codeleap.co.uk/careers/',
      post,
    );
    return response.data;
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    const response = await axios.delete(
      `https://dev.codeleap.co.uk/careers/${id}/`,
    );
    return response.data;
  },
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post: IPost) => {
    const response = await axios.patch(
      `https://dev.codeleap.co.uk/careers/${post.id}/`,
      post,
    );
    return response.data;
  },
);

interface IPost {
  id?: number;
  username: string;
  title: string;
  content: string;
  created_datetime: Date;
}

// INITIAL STATE

const initialState = {
  posts: [] as IPost[],
  status: 'idle',
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export const selectAllPosts = (state: RootStateOrAny) => state.posts.posts;
export default postSlice.reducer;
