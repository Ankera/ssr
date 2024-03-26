import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import userService from './service/userService';

export const store = configureStore({
  reducer: {
    user: userService,
  }
});

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => {
  return useDispatch<RootDispatch>()
}