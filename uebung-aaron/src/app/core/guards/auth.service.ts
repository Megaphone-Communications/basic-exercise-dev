import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static loggedIn: boolean;
  constructor() {}

  isUserLoggedIn() {
    let loggedIn = sessionStorage.getItem('loggedIn');
    return Boolean(loggedIn);
  }
}
