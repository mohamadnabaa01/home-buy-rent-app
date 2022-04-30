import { TestBed } from '@angular/core/testing';

import { HomesForRentService } from './homes-for-rent.service';

describe('HomesForRentService', () => {
  let service: HomesForRentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesForRentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
