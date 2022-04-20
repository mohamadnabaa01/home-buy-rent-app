import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-buyer',
  templateUrl: './profile-buyer.page.html',
  styleUrls: ['./profile-buyer.page.scss'],
})
export class ProfileBuyerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
