import { TestBed } from '@angular/core/testing';

import { CarsForRentService } from './cars-for-rent.service';

describe('CarsForRentService', () => {
  let service: CarsForRentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsForRentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
