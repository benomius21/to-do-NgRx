import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { userReducer } from "../Store/Reducers/home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "../Store/Effects/home.effects";


const homeRoutes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        StoreModule.forFeature('users', userReducer),
        EffectsModule.forFeature([HomeEffects])
    ],
    exports: [RouterModule]
})

export class HomeModule { }