import { Joke } from './../interfaces/joke';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesManagementService {
  /**
    Array of random Jokes
  */
  randomJokes: Array<Joke>;

  /**
  Array of favorite Jokes
  */
  favoriteJokes: Array<Joke>;
    /**
   * @ignore
   */
  constructor() { }

/**
* Return random jokes array
*
* @example
*
* getRandomJokes();
*
* @param {object} joke Joke Object
* @returns {Array<Joke>}
*/
  getRandomJokes(): Array<Joke> {
    return this.randomJokes;
  }

/**
* Reinitiate the array of random jokes
*
* @example
*
* setRandomJokes(jokes);
*
* @param {Array<Joke>} jokes Array of Jokes
* @returns {void}
*/
  setRandomJokes(jokes: Array<Joke>) {
    this.randomJokes = [...jokes];
  }

  /**
* Return favorite jokes array
*
* @example
*
* getFavoriteJokes();
*
* @returns {Array<Joke>}
*/
  getFavoriteJokes(): Array<Joke> {
    return this.favoriteJokes;
  }

  /**
* Reinitiate the array of favorite jokes
*
* @example
*
* setFavoriteJokes(jokes);
*
* @param {Array<Joke>} jokes Array of Jokes
* @returns {void}
*/
  setFavoriteJokes(jokes: Array<Joke>) {
    this.favoriteJokes = [...jokes];
  }

  /**
* Add joke to favorite list
*
* @example
*
* addToFavorites(joke: Joke);
*
* @param {object} joke Joke Object
* @returns {void}
*/
  addToFavorites(joke: Joke) {
    this.favoriteJokes.push(joke);
    window.localStorage.setItem('CH_favorite_jokes', JSON.stringify(this.getFavoriteJokes()))
  }

/**
* Remove joke from favorite list
*
* @example
*
* removeFromFavorites(27);
*
* @param {number} id Joke ID
* @returns {void}
*/
  removeFromFavorites(id): void {
    this.setFavoriteJokes([...this.favoriteJokes.filter((joke) => joke.id !== id)]);
    window.localStorage.setItem('CH_favorite_jokes', JSON.stringify(this.getFavoriteJokes()));
  }

/**
* Check whether a joke is in favorites list or not
*
* @example
*
* isInFavorites(100) ? doSomethingIfTrue() : doOtherthingIfFalse();
*
* @param {number} id Joke ID
* @returns {boolean}
*/
  isInFavorites(id): boolean {
    const inFavorites = this.favoriteJokes.find((joke) => {
      return joke.id === id;
    });
    return inFavorites ? true : false;
  }
}
