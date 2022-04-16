import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomesForSaleMoreInfoPage } from './homes-for-sale-more-info.page';

describe('HomesForSaleMoreInfoPage', () => {
  let component: HomesForSaleMoreInfoPage;
  let fixture: ComponentFixture<HomesForSaleMoreInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesForSaleMoreInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomesForSaleMoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
