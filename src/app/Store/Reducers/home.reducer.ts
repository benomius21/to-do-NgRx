import { createReducer, on } from '@ngrx/store';
import * as homeActions from '../Actions/home.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/Models/Users';
export const USERS_FEATURE_KEY = 'users';

export interface UserState {
    userEmail: string,
    favoriteColor: string
    users: User[]
}

export interface UsersPartialState {
    readonly [USERS_FEATURE_KEY]: UserState;
}
export const initialState: UserState = {
    userEmail: '',
    favoriteColor: 'blue',
    users: []
}

const _usersReducer = createReducer(
    initialState,
    on(homeActions.getUsersSuccess, (state, { users }) => {
        console.log(state);
        return {
            ...state,
            users: [...users]
        }
    }),
    on(homeActions.getUsersFailer, (state, { err }) => {
        console.log('Error: ', err);
        return {
            ...state
        }
    }),
);

export function userReducer(state: any, actions: any) {
    return _usersReducer(state, actions);
}