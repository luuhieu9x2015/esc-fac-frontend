import { RootState } from 'types';
import { Reducer, AnyAction } from '@reduxjs/toolkit';

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export interface InjectReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}

export interface InjectSagaParams {
  key: RootStateKeyType | string;
}
