import { configureStore } from '@reduxjs/toolkit';

import { createReducer } from './reducers';

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
}
