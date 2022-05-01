import { TestBed } from '@angular/core/testing';

import { HomesForRentMoreInfoService } from './homes-for-rent-more-info.service';

describe('HomesForRentMoreInfoService', () => {
  let service: HomesForRentMoreInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesForRentMoreInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
