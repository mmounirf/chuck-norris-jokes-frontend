import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    if (window.localStorage.getItem('CH_user') && JSON.parse(window.localStorage.getItem('CH_user')).token) {
      return true;
    } else {
      return false;
    }
  }


  logout() {
    window.localStorage.clear();
    this.router.navigate(['']);
  }
}
