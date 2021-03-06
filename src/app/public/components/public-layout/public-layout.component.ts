import { AuthService } from './../../../shared/services/auth.service';
import { ApiService } from './../../../shared/services/api.service';
import { TimerManagementService } from './../../../shared/services/timer-management.service';
import { JokesManagementService } from './../../../shared/services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private jokesManagement: JokesManagementService,
    private timerManagement: TimerManagementService,
    private apiService: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  /**
  Boolean flag to check if the counter is working or not. Default is true.
  */
  isCounting = true;
  /**
  Event emitter that emits boolean value to toggle timer state
  */
  toggleCount = new EventEmitter<boolean>();
  ngOnInit() {
    this.jokesManagement.setRandomJokes(this.route.snapshot.data.jokes.data);
    const storedJokes = JSON.parse(window.localStorage.getItem('CH_favorite_jokes'));
    storedJokes ? this.jokesManagement.setFavoriteJokes(storedJokes) : this.jokesManagement.setFavoriteJokes([]);
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  getRandomJokes(): Array<Joke> {
    return this.jokesManagement.getRandomJokes();
  }

  getFavoriteJokes(): Array<Joke> {
    return this.jokesManagement.getFavoriteJokes();
  }

  toggleCounting() {
    this.isCounting = !this.isCounting;
    this.isCounting ? this.timerManagement.startCounting() : this.timerManagement.stopCounting();
  }

  addJoke(isCounting) {
    if (isCounting) {
      this.apiService.getRandomJoke().subscribe((joke) => {
        // Add joke to favorites, only if it is unqiue one.
        if (!this.jokesManagement.isInFavorites(joke.data[0].id)) {
          this.jokesManagement.addToFavorites(joke.data[0]);
        }
      });
    } else {
      this.toggleCounting();
    }
  }

}
