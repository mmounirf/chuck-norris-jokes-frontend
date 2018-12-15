import { ApiService } from './../../shared/services/api.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesResolverService implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(): Observable<Array<Joke>> {
    return this.apiService.getRandomJokes();
  }
}
