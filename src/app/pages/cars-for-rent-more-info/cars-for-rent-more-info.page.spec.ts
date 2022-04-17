import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarsForRentMoreInfoPage } from './cars-for-rent-more-info.page';

describe('CarsForRentMoreInfoPage', () => {
  let component: CarsForRentMoreInfoPage;
  let fixture: ComponentFixture<CarsForRentMoreInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsForRentMoreInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarsForRentMoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
