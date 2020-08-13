/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TaskActionsState {
  value: string[];
}

const initialState: TaskActionsState = {
  value: ['Completed', 'Ended', 'Active'],
};

export const taskActionsSlice = createSlice({
  name: 'taskActions',
  initialState,
  reducers: {
    setTaskActions: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setTaskActions } = taskActionsSlice.actions;

export const getTaskActions = (state: RootState) => (state.taskActions.value);

export default taskActionsSlice.reducer;
