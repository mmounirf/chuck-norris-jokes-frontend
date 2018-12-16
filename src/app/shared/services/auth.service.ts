import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
      /**
   * @ignore
   */
  constructor(private router: Router) { }

  /**
* Check if the user is logged in
*
* @example
*
* isLoggedIn();
*
* @returns {boolean}
*/
  isLoggedIn(): boolean {
    if (window.localStorage.getItem('CH_user') && JSON.parse(window.localStorage.getItem('CH_user')).token) {
      return true;
    } else {
      return false;
    }
  }

/**
* Log the user out of the application and redirect back to public view.
*
* @example
*
* logout();
*
* @returns {void}
*/
  logout() {
    window.localStorage.clear();
    this.router.navigate(['']);
  }
}
