/* eslint-disable no-unused-vars */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskActionsReducer from './taskActionsSlice';

export const store = configureStore({
  reducer: {
    taskActions: taskActionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
