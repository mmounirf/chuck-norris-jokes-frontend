import { AuthService } from './../../../shared/services/auth.service';
import { AlertService } from './../../../shared/services/alert.service';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private apiSerivce: ApiService,
    private alert: AlertService,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  onSubmit() {
    this.apiSerivce.login(this.form.value).subscribe((data: User) => {
      window.localStorage.clear();
      window.localStorage.setItem('CH_user', JSON.stringify({
        token:  data.token,
        user: {
            firstname: data.user.firstname,
            lastname: data.user.lastname,
            email: data.user.email,
            guid: data.user.guid,
          }
        })
      );
      this.router.navigate(['dashboard']);
    }, (error) => {
      this.alert.show(`⚠️ ${error.error.err || error.statusText}`, 'Dismiss', null);
    });
  }

}
