import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsForRent, CarsForRentService } from 'src/app/apis/cars-for-rent.service';

@Component({
  selector: 'app-cars-for-rent',
  templateUrl: './cars-for-rent.page.html',
  styleUrls: ['./cars-for-rent.page.scss'],
})
export class CarsForRentPage implements OnInit {

  carsForRent : CarsForRent[];
  constructor(private router:Router, private service: CarsForRentService) { }

  ngOnInit() {
    this.service.getAllCarsForRent().subscribe(response=>{
      this.carsForRent = response;
      console.log(this.carsForRent);
    });
  }
  GoToCarsForRentMoreInfo(){
    this.router.navigate(['/cars-for-rent-more-info']);
  }
  GoToCarsForRentFilter(){
    this.router.navigate(['/cars-for-rent-filter']);
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
