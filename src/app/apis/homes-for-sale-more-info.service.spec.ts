import { TestBed } from '@angular/core/testing';

import { HomesForSaleMoreInfoService } from './homes-for-sale-more-info.service';

describe('HomesForSaleMoreInfoService', () => {
  let service: HomesForSaleMoreInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesForSaleMoreInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
