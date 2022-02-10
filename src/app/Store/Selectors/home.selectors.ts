import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  UserState,
} from '../Reducers/home.reducer';

export const getUserState = createFeatureSelector<
  UserState
>('users');

export const selectUserUsers = createSelector(
   getUserState,
  (state: UserState) => state.users
);

