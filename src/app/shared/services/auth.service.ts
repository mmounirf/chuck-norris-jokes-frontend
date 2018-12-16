import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService,  private alert: AlertService) {}

  isAuthenticated(): boolean {
    const subject = new BehaviorSubject<boolean>(false);
    if (this.isLoggedIn()) {
      this.api.verify().subscribe((resp) => {
        subject.next(true);
      }, (error) => {
        this.alert.show(error.error.err);
        subject.next(false);
      });
      return subject.value;
    }
  }

  isLoggedIn() {
    // Check if user object is set and token exist
    if ( window.localStorage.getItem('CH_user') && JSON.parse(window.localStorage.getItem('CH_user')).token ) {
      return true;
    } else {
      return false;
    }
  }
}
