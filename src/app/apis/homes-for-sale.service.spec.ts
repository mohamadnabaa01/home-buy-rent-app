import { TestBed } from '@angular/core/testing';

import { HomesForSaleService } from './homes-for-sale.service';

describe('HomesForSaleService', () => {
  let service: HomesForSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesForSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
