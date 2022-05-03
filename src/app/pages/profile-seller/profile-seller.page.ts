import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, ProfileService } from 'src/app/apis/profile.service';

@Component({
  selector: 'app-profile-seller',
  templateUrl: './profile-seller.page.html',
  styleUrls: ['./profile-seller.page.scss'],
})
export class ProfileSellerPage implements OnInit {

  User: [User];

  constructor(private router:Router, private service: ProfileService) { }

  ngOnInit() {
    this.service.getProfile().subscribe(response=>{
      if(response != null){
        this.User = response;
      }
    })
  }
  GoToAddHome(){
    this.router.navigate(['/add-home']);
  }
  GoToEditProfile(){
    this.router.navigate(['/edit-profile']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    const user_type = localStorage.getItem('user_type');
    this.router.navigate(['/profile-' + user_type]);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
