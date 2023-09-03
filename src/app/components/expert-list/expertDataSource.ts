import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Expert } from '../../interfaces/expert.model';
import { ExpertsService } from '../../services/experts.service';

export class ExpertsDataSource extends DataSource<Expert | undefined> {
  cachedExperts = Array.from<Expert>({ length: 0 });
  dataStream = new BehaviorSubject<Array<Expert | undefined>>(
    this.cachedExperts
  );
  subscription = new Subscription();

  constructor(private expertsService: ExpertsService) {
    super();
    this._getExpertsPage();
  }

  pageSize = 9;
  lastPage = 0;

  private _getExpertsPage(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.expertsService.getExperts().subscribe(res => {
        this.cachedExperts = this.cachedExperts.concat(res);
        this.dataStream.next(this.cachedExperts);
      });
    }
  }

  _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<Array<Expert | undefined> | ReadonlyArray<Expert | undefined>> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        // Update the data
      })
    );
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }
}
