import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    /**
   * @ignore
   */
  constructor(
    public router: Router,
    private alert: AlertService,
    private api: ApiService,
    private auth: AuthService

    ) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      const subject = new Subject<boolean>();
      // Verify token over the gateway
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
