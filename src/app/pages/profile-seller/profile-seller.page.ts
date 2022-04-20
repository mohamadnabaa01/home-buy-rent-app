import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-seller',
  templateUrl: './profile-seller.page.html',
  styleUrls: ['./profile-seller.page.scss'],
})
export class ProfileSellerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToAddHome(){
    this.router.navigate(['/add-home']);
  }
  GoToAddCar(){
    this.router.navigate(['/add-car']);
  }
  GoToSalesList(){
    this.router.navigate(['/sales-list']);
  }
  GoToEditProfile(){
    this.router.navigate(['/edit-profile']);
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
