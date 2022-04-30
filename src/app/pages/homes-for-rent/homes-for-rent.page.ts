import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, HomesForRentService } from 'src/app/apis/homes-for-rent.service';

@Component({
  selector: 'app-homes-for-rent',
  templateUrl: './homes-for-rent.page.html',
  styleUrls: ['./homes-for-rent.page.scss'],
})
export class HomesForRentPage implements OnInit {

  HomesForRent: Home[];

  constructor(private router:Router, private service: HomesForRentService, private storage: Storage) { }

  ngOnInit() {
    this.service.getHomesForRent().subscribe(response=>{
      if(response != null)
        this.HomesForRent = response;
    })
  }
  GoToHomesForRentMoreInfo(home: Home){
    this.service.getHomeForRentID(home).subscribe(response=>{
      if(response != null)
        localStorage.setItem('home-for-rent-id', String(response));
    })
  }
  GoToHomesForRentFilter(){
    this.router.navigate(['/homes-for-rent-filter']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile']);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
