import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  userState,
} from '../Reducers/home.reducer';

export const getUserState = createFeatureSelector<
  userState
>('users');

export const selectUserUsers = createSelector(
   getUserState,
  (state: userState) => state.users
);

