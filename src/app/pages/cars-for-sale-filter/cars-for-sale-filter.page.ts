import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-for-sale-filter',
  templateUrl: './cars-for-sale-filter.page.html',
  styleUrls: ['./cars-for-sale-filter.page.scss'],
})
export class CarsForSaleFilterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToCarsForSale(){
    this.router.navigate(['/cars-for-sale']);
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
