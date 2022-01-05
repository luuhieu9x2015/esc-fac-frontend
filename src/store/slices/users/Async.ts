import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IApi } from 'types/APIResponse';
import { ITodo } from 'types/Todo';
import { constants } from 'utils/constants';
import { IUserState } from './UserSlices';

export const fetchUserAvatar = createAsyncThunk(
  'user/fetchUserAvatar',
  async () => {
    const result = await axios.get<IApi.Response<ITodo.BaseData>>('/posts/1');
    const { status, data } = result;

    if (status === constants.api_res_success) {
      return data as unknown as ITodo.BaseData;
    }

    return {
      body: '',
      id: 0,
      title: '',
      userId: 0,
    };
  },
);

export const userExtraReducers = (builder) => {
  builder.addCase(fetchUserAvatar.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(fetchUserAvatar.rejected, (state) => {
    state.isLoading = false;
  });
  builder.addCase(fetchUserAvatar.fulfilled, (state: IUserState, action) => {
    state.isLoading = false;
    state.userTodo = action.payload;
  });
};
