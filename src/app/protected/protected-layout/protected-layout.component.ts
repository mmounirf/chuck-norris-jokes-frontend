import { AlertService } from './../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-protected-layout',
  templateUrl: './protected-layout.component.html',
  styleUrls: ['./protected-layout.component.scss']
})
export class ProtectedLayoutComponent implements OnInit {

  constructor(
    private alert: AlertService
  ) { }

  ngOnInit() {
    const userData: User = JSON.parse(localStorage.getItem('CH_user'));
    this.alert.show(`Welcome back ${userData.user.firstname} ${userData.user.lastname}`);
  }

  getUserFavoriteJokes(userId) {
    return [];
  }
}
