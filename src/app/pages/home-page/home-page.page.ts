import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToHomesForSale(){
    this.router.navigate(['/homes-for-sale']);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile-seller']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
