import { Joke } from './../interfaces/joke';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    /**
   * @ignore
   */
  constructor(private http: HttpClient) { }

  public getRandomJokes(): Observable<Array<Joke>> {
    return this.http.get<Array<Joke>>(`${API_URL}/jokes`);
  }

  public getRandomJoke(): Observable<any> {
    return this.http.get<Array<Joke>>(`${API_URL}/jokes/1`);
  }

  public login(body): Observable<User> {
    return this.http.post<User>(`${API_URL}/login`, body);
  }

  // Verify logged in user token
  public verify() {
    const token = JSON.parse(window.localStorage.getItem('CH_user')).token;
    return this.http.get(`${API_URL}/login/verify`, {headers: {Authorization: `Bearer ${token}`} });
  }

  public getUserJokes() {

  }
}
