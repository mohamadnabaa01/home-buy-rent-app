import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, HomesForSaleService } from 'src/app/apis/homes-for-sale.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-homes-for-sale',
  templateUrl: './homes-for-sale.page.html',
  styleUrls: ['./homes-for-sale.page.scss'],
})
export class HomesForSalePage implements OnInit {


  HomesForSale: Home[];

  constructor(private router:Router, private service: HomesForSaleService, private storage: Storage) { }

  ngOnInit() {
    this.service.getHomesForSale().subscribe(response=>{
      if(response != null){
        this.HomesForSale = response;
      }
    })
  }
  public GoToHomesForSaleMoreInfo(home: Home){
    console.log(home);
    this.service.getHomeForSaleID(home).subscribe(response=>{
      console.log(response);
      if(response != null){
        localStorage.setItem('home-for-sale-id', String(response));
        this.router.navigate(['/homes-for-sale-more-info']);
      }
    })
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
