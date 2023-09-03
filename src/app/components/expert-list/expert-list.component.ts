// expert-list.component.ts
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { ExpertsService } from '../../services/experts.service';
import { ExpertsDataSource } from './expertDataSource';
import { Expert } from '../../interfaces/expert.model';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements AfterContentInit {
  @ViewChild('grid', { static: false }) grid: MatGridList;

  cols: Subject<any> = new Subject();
  expert: Expert;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  };

  dataSource: ExpertsDataSource;

  constructor(
    private expertsService: ExpertsService,
    private mediaObserver: MediaObserver
  ) {
    this.dataSource = new ExpertsDataSource(expertsService);
    console.log(this.expertsService);
  }

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      this.cols.next(this.gridByBreakpoint[change[0].mqAlias]);
    });
  }
}
