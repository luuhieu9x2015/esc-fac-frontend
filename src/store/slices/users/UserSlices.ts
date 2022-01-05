import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { ITodo } from 'types/Todo';
import { IUsers } from 'types/Users';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { userExtraReducers } from './Async';

export interface IUserState {
  info: IUsers.BaseData;
  isLoading: boolean; // default: false
  errorMessage: string; // default: ''
  userTodo: ITodo.BaseData;
}

const userSlices = createSlice<
  IUserState,
  SliceCaseReducers<IUserState>,
  'users'
>({
  name: 'users',
  initialState: {
    info: {
      role: '',
      name: '',
      avatar: '',
    },
    isLoading: false,
    errorMessage: '',
    userTodo: {
      body: '',
      id: 0,
      title: '',
      userId: 0,
    },
  },
  reducers: {
    addUserInfo: (
      state: IUserState,
      actions: PayloadAction<IUsers.BaseData>,
    ) => {
      state.info = actions.payload;
    },
  },
  extraReducers: userExtraReducers,
});

const { reducer, actions } = userSlices;
export const { addUserInfo } = actions;
export default reducer;
