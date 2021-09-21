import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users.service';

export interface Link {
  id : number
  from: string
  to: string
  cliks: number
  owner: User 
}


@Injectable({
  providedIn: 'root'
})
export class LinksService {
  static findLinksByUser: any;

  constructor(private http: HttpClient) { }

  findLinksByUser(){
    return this.http.get('http://127.0.0.1:3000/auth/login')
  }

  getLinkById(){
    return this.http.get('http://127.0.0.1:3000/link')
  }

  CreateLink(){
    return this.http.get('http://127.0.0.1:3000/auth/login')
  }

}
