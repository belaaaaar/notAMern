import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from './links.service';

export interface User {
  email: string
  password: string
  links: Link 
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }        

  authUser(){
    return this.http.get('http://127.0.0.1:3000/auth/login')
  }

  createUser(){
    return this.http.get('http://127.0.0.1:3000/auth/registration')
  }
  
}
