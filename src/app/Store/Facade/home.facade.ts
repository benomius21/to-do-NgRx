import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as homeActions from '../Actions/home.actions';
import * as homeSelectors from '../Selectors/home.selectors';
import * as homeReducer from '../Reducers/home.reducer';

@Injectable()
export class HomeFacade {
    constructor(private store: Store<homeReducer.usersPartialState>) { }

    users$ = this.store.pipe(select(homeSelectors.selectUserUsers));

    public dispatchUsers() {
        this.store.dispatch(homeActions.getUsers());
    }

}