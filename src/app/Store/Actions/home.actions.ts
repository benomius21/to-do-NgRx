import { createAction, props } from '@ngrx/store'

export const getUsers = createAction('[Home Component] getUsers');

export const getUsersSuccess = createAction('[Home Component] getUserSuccess', props<{ users: any }>());

export const getUsersFailer = createAction('[Home Component] getUsersFailer', props<{err: any}>());


