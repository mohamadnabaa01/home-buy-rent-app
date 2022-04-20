import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-for-rent-more-info',
  templateUrl: './cars-for-rent-more-info.page.html',
  styleUrls: ['./cars-for-rent-more-info.page.scss'],
})
export class CarsForRentMoreInfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
