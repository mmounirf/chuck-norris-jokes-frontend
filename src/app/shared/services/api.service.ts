import { Joke } from './../interfaces/joke';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public getRandomJokes(): Observable<Array<Joke>> {
    return this.http.get<Array<Joke>>(`${API_URL}/jokes`);
  }

  public getRandomJoke(): Observable<any> {
    return this.http.get<Array<Joke>>(`${API_URL}/jokes/1`);
  }
}
