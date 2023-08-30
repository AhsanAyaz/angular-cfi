import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';

export type UserResponse = {
  results: User[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  constructor() { }

  getUsers() {
    return this.http.get<UserResponse>('https://randomuser.me/api?results=10')
  }
}
