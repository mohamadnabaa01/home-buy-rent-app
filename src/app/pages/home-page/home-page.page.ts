import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, HomesService } from 'src/app/apis/homes.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private router: Router, private service: HomesService, private storage: Storage) { }

  HomesForSale : Home[];
  HomesForRent: Home[];

  ngOnInit() {
    this.service.getHomesForSale().subscribe(response=>{
      if(response != null)
        this.HomesForSale = response;
    })
    this.service.getHomesForRent().subscribe(response=>{
      if(response != null)
        this.HomesForRent = response;
    })
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
    const user_type = localStorage.getItem('user_type');
    this.router.navigate(['/profile-' + user_type]);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
