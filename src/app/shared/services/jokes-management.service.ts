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
    window.localStorage.setItem('CH_favorite_jokes', JSON.stringify(this.getFavoriteJokes()))
  }

  removeFromFavorites(id) {
    this.setFavoriteJokes([...this.favoriteJokes.filter((joke) => joke.id !== id)]);
    window.localStorage.setItem('CH_favorite_jokes', JSON.stringify(this.getFavoriteJokes()));
  }

  isInFavorites(id) {
    const inFavorites = this.favoriteJokes.find((joke) => {
      return joke.id === id;
    });
    return inFavorites ? true : false;
  }
}
