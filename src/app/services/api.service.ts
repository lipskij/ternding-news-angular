import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = `https://hacker-news.firebaseio.com/v0/topstories.json`;
  NEWS_URL = `https://hacker-news.firebaseio.com/v0/`;

  constructor(private http: HttpClient) {}

  getItems(ids: number[]): Observable<News[]> {
    ids = ids.slice(0, 100);

    const observables = ids.map((id) =>
      this.http.get<News>(`${this.NEWS_URL}item/${id}.json`)
    );
    return forkJoin(observables);
  }
  getTopIds(): Observable<number[]> {
    return this.http.get<number[]>(this.BASE_URL);
  }
  // most voted news
  getMostVotedNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.NEWS_URL}mostvoted.json`);
  }
}
