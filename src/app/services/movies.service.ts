import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(AppConfig.getBaseUrl('genre/movie/list'));
  }
}
