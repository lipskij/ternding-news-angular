import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  collectionSize = 0;
  @Input()
  pageSize = 5;
  @Input()
  currentPage = 1;
  @Input()
  maxSize = 2;
  @Input()
  firstLastButtons = false;
  @Input()
  nextPreviousButtons = true;
  @Input()
  small = false;

  totalPages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
    console.log(this.totalPages);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  next() {
    const nextPage = this.currentPage + 1;
    console.log(nextPage);
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
