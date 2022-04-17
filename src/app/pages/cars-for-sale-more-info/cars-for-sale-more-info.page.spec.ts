import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarsForSaleMoreInfoPage } from './cars-for-sale-more-info.page';

describe('CarsForSaleMoreInfoPage', () => {
  let component: CarsForSaleMoreInfoPage;
  let fixture: ComponentFixture<CarsForSaleMoreInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsForSaleMoreInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarsForSaleMoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
