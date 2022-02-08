import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as homeActions from '../Actions/home.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Injectable()
export class HomeEffects {
    constructor(private actions: Actions, private api: ApiService) { }
    
    getUsers = createEffect(() =>
        this.actions.pipe(
            ofType(homeActions.getUsers),
            switchMap(() =>
                this.api.getAllUser().pipe(
                    map((users) => 
                         homeActions.getUsersSuccess({users:users}),
                    ),
                    catchError((err) => of(homeActions.getUsersFailer(err)))
                )
            )
        )
    );
    
}