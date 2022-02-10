import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  UsersPartialState,
  UserState,
} from '../Reducers/home.reducer';

export const getUserState = createFeatureSelector<
  UsersPartialState,
  UserState
>('users');

export const selectUserUsers = createSelector(
   getUserState,
  (state: UserState) => state.users
);

