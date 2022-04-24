import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddHomeService } from 'src/app/apis/add-home.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {

  constructor(private router:Router, private service: AddHomeService) { }

  ngOnInit() {
  }
  GoToSaleList(){
    this.router.navigate(['/sales-list']);
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
  public onSubmit(form: NgForm){
    const home = form.value;
    this.service.addHome(home, form.value.sale_type).subscribe(response =>{
      if(response != null){
        this.router.navigate(['/sales-list']);
      }
    });
  }

}
