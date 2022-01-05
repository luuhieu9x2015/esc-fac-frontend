import { combineReducers } from '@reduxjs/toolkit';
import UserSlices from 'store/slices/users/UserSlices';

export function createReducer() {
  return combineReducers({
    users: UserSlices,
  });
}
