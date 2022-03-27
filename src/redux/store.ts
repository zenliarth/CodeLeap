import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postsReducer from '../actions/Posts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
