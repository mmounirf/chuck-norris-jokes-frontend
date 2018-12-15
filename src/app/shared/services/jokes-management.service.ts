import { Joke } from './../interfaces/joke';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesManagementService {
  randomJokes: Array<Joke>;
  favoriteJokes: Array<Joke>;

  constructor() { }

  getRandomJokes(): Array<Joke> {
    return this.randomJokes;
  }

  setRandomJokes(jokes) {
    this.randomJokes = [...jokes];
  }

  getFavoriteJokes(): Array<Joke> {
    return this.favoriteJokes;
  }

  setFavoriteJokes(jokes) {
    this.favoriteJokes = [...jokes];
  }

  addToFavorites(joke) {
    this.favoriteJokes.push(joke);
  }

  removeFromFavorites(id) {
    this.setFavoriteJokes([...this.favoriteJokes.filter((joke) => joke.id !== id)]);
  }

  isInFavorites(id) {
    const inFavorites = this.favoriteJokes.find((joke) => {
      return joke.id === id;
    });
    return inFavorites ? true : false;
  }
}
