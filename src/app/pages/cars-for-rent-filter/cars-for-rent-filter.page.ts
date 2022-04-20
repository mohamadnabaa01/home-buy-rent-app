import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-for-rent-filter',
  templateUrl: './cars-for-rent-filter.page.html',
  styleUrls: ['./cars-for-rent-filter.page.scss'],
})
export class CarsForRentFilterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToCarsForRent(){
    this.router.navigate(['/cars-for-rent']);
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
