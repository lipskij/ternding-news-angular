import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { News } from '../../models';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topIds: number[] = [];
  topNews: News[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getTopIds();
    this.getTopNews();
    console.log('hello', this.topNews);
  }
  getTopIds() {
    this.apiService
      .getTopIds()
      .pipe(
        tap((ids) => {
          this.topIds = ids;
        }), // required only if you need to store ids
        switchMap((ids) => this.apiService.getItems(ids))
      )
      .subscribe((data) => {
        this.topNews = data;
        console.log(this.topNews);
      });
  }
  getTopNews() {
    this.apiService
      .getItems(this.topIds)
      .subscribe((data) => (this.topNews = data));
  }
}
