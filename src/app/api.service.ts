import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAllUser(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
