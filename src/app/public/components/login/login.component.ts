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
    private router: Router

    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.apiSerivce.login(this.form.value).subscribe((data: User) => {
      this.router.navigate(['dashboard']);
      window.localStorage.setItem('CH_user', JSON.stringify({
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          email: data.user.email,
          guid: data.user.guid,
          token:  data.token
        })
      );
    }, (error) => {
      this.alert.show(`⚠️ ${error.error.err}`, 'Dismiss', null);
    });
  }

}
