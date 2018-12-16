import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
    private alert: AlertService,
    private api: ApiService) { }

  canActivate(): Observable<boolean> | boolean {
    if (window.localStorage.getItem('CH_user') && JSON.parse(window.localStorage.getItem('CH_user')).token) {
      const subject = new Subject<boolean>();
      this.api.verify().subscribe((res) => {
        if (res['msg'] === 'Authorized') {
          subject.next(true);
        } else {
          subject.next(false);
          this.router.navigate(['login']);
        }
      }, (error) => {
        this.alert.show(error.error.err);
        subject.next(false);
        this.router.navigate(['login']);
      }, () => {
        subject.complete();
      });
      return subject;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
