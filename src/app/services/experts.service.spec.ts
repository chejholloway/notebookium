import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { ExpertsService } from './experts.service';

describe('ExpertsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpertsService]
    })
  );
  it(`should create`, async(
    inject(
      [HttpTestingController, ExpertsService],
      (httpClient: HttpTestingController, apiService: ExpertsService) => {
        expect(apiService).toBeTruthy();
      }
    )
  ));
});
