import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { News } from '../../models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topIds: number[] = [];
  tableContent: News[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getTopIds();
    this.getTopNews();
  }
  getTopIds() {
    this.apiService
      .getTopIds()
      .pipe(switchMap((ids) => this.apiService.getItems(ids)))
      .subscribe((data) => {
        this.loading = false;
        this.tableContent = data;
      });
  }
  getTopNews() {
    this.apiService
      .getItems(this.topIds)
      .subscribe((data) => (this.tableContent = data));
  }
}
