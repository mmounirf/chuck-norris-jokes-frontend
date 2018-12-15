import { JokesManagementService } from './../../services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  @Input() jokes: Array<Joke>;
  @Input() type: string;
  constructor(
    private jokesManagement: JokesManagementService,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {

  }

  isInFavorites(id): boolean {
    return this.jokesManagement.isInFavorites(id);
  }

  addToFavorites(joke) {
    // Add joke to favorites, if it is unqiue one.
    if (!this.isInFavorites(joke.id)) {
      // Add joke to favorites, if there's still enough space in favorite list.
      if (this.jokesManagement.getFavoriteJokes().length !== 10) {
        this.jokesManagement.addToFavorites(joke);
      } else {
        // If no enough space, show warnning to user.
        this.snackBar.open('⚠️ Favorite list max limit reached', 'Dismiss');
      }
    } else {
      // If joke already exists in favorite list, remove it.
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
