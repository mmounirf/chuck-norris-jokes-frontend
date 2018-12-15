import { JokesManagementService } from './../../services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  @Input() jokes: Array<Joke>;
  @Input() type: string;
  constructor(private jokesManagement: JokesManagementService) { }

  ngOnInit() {

  }

  isInFavorites(id): boolean {
    return this.jokesManagement.isInFavorites(id);
  }

  addToFavorites(joke) {
    if (!this.isInFavorites(joke.id)) {
      this.jokesManagement.addToFavorites(joke);
    } else {
      this.jokesManagement.removeFromFavorites(joke.id);
    }
  }

  removeFromFavorites(id) {
    this.jokesManagement.removeFromFavorites(id)
  }

  getJokesLength(): number {
    return this.jokesManagement.getFavoriteJokes().length;
  }

}
