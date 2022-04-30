import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, HomesService } from 'src/app/apis/homes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private router: Router, private service: HomesService) { }

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
    this.router.navigate(['/profile-seller']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
