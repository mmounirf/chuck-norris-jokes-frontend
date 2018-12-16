import { AlertService } from './../../services/alert.service';
import { JokesManagementService } from './../../services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
      /**
    Array of jokes to display in the component list
  */
  @Input() jokes: Array<Joke>;
      /**
    Type of jokes list. Currently supports 'random' and 'favorites'.
  */
  @Input() type: string;
  constructor(
    private jokesManagement: JokesManagementService,
    public alert: AlertService
    ) { }

  ngOnInit() {

  }

    /**
   * @ignore
   */
  isInFavorites(id): boolean {
    return this.jokesManagement.isInFavorites(id);
  }
    /**
   * @ignore
   */
  addToFavorites(joke) {
    // Add joke to favorites, if it is unqiue one.
    if (!this.isInFavorites(joke.id)) {
      // Add joke to favorites, if there's still enough space in favorite list.
      if (this.jokesManagement.getFavoriteJokes().length !== 10) {
        this.jokesManagement.addToFavorites(joke);
      } else {
        // If no enough space, show warnning to user.
        this.alert.show('⚠️ Favorite list max limit reached', 'Dismiss');
      }
    } else {
      // If joke already exists in favorite list, remove it.
      this.jokesManagement.removeFromFavorites(joke.id);
    }
  }

/**
   * @ignore
   */
  removeFromFavorites(id) {
    this.jokesManagement.removeFromFavorites(id)
  }

      /**
   * @ignore
   */
  getJokesLength(): number {
    return this.jokesManagement.getFavoriteJokes().length;
  }

}
