import { ApiService } from './../../../shared/services/api.service';
import { TimerManagementService } from './../../../shared/services/timer-management.service';
import { JokesManagementService } from './../../../shared/services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private apiService: ApiService
  ) { }
  isCounting = true;
  toggleCount = new EventEmitter<boolean>();
  ngOnInit() {
    this.jokesManagement.setRandomJokes(this.route.snapshot.data.jokes.data);

    const storedJokes = JSON.parse(window.localStorage.getItem('favorite_jokes'));
    storedJokes ? this.jokesManagement.setFavoriteJokes(storedJokes) : this.jokesManagement.setFavoriteJokes([]);

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
        this.jokesManagement.addToFavorites(joke.data[0]);
      });
    } else {
      this.toggleCounting();
    }
  }

}
