import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomesForRentMoreInfoPage } from './homes-for-rent-more-info.page';

describe('HomesForRentMoreInfoPage', () => {
  let component: HomesForRentMoreInfoPage;
  let fixture: ComponentFixture<HomesForRentMoreInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesForRentMoreInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomesForRentMoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
