import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { User } from '../Models/Users';
import { HomeFacade } from '../Store/Facade/home.facade';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly users$: Observable<User[]> = this.facade.users$;
  
  constructor(private service: ApiService, private facade: HomeFacade) { }

  ngOnInit(): void {
  }

  getUsers() {
     this.facade.dispatchUsers();
  }
}
