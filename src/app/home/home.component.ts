import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { HomeFacade } from '../Store/Facade/home.facade';
import { usersPartialState, userState } from '../Store/Reducers/home.reducer';
import {User} from '../Models/Users'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users$!: Observable<any>;
  
  constructor(private service: ApiService, private facade: HomeFacade) { }

  ngOnInit(): void {
    this.users$ = this.facade.users$
  }

  getUsers() {
     this.facade.dispatchUsers();
  }
}
