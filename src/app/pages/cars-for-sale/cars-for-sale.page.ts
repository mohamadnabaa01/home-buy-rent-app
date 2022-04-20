import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.page.html',
  styleUrls: ['./cars-for-sale.page.scss'],
})
export class CarsForSalePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToCarsForSaleFilter(){
    this.router.navigate(['/cars-for-sale-filter']);
  }
  GoToCarsForSaleMoreInfo(){
    this.router.navigate(['/cars-for-sale-more-info']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile']);
  }
  GoToFavorites(){
    this.router.navigate(['/favorites']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
