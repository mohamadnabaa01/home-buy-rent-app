import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddHomeService, User_Home } from 'src/app/apis/add-home.service';
import { Storage } from '@ionic/storage';
import { AlertController, DomController } from '@ionic/angular';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {

  constructor(private router:Router, private service: AddHomeService, private storage: Storage, private alertController: AlertController) { }

  ngOnInit() {
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    const user_type = localStorage.getItem('user_type');
    this.router.navigate(['/profile-'+ user_type]);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }
  async showAlertFailImage1(){
    const alert = await this.alertController.create({
      header: 'Image 1 is required',
      message: 'Please choose a specific image',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailLocation(){
    const alert = await this.alertController.create({
      header: 'Home Location is required',
      message: 'Please enter a specific home location',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailPrice(){
    const alert = await this.alertController.create({
      header: 'Home price is required',
      message: 'Please enter a valid home price. The price should be numeric only. If home for sale then in $, if for rent then in $ per year.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailArea(){
    const alert = await this.alertController.create({
      header: 'Home area is required',
      message: 'Please enter a valid home area. Area is numeric only in meter square.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailLivingRooms(){
    const alert = await this.alertController.create({
      header: 'Living rooms is required',
      message: 'Please enter a numeric value of number of living rooms.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailBedrooms(){
    const alert = await this.alertController.create({
      header: 'Bedrooms is required',
      message: 'Please enter a numeric value of number of bedrooms.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailBathrooms(){
    const alert = await this.alertController.create({
      header: 'Bathrooms is required',
      message: 'Please enter a numeric value of number of bathrooms.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailHomeType(){
    const alert = await this.alertController.create({
      header: 'Home Type is required',
      message: 'Please enter a valid home type.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailSaleType(){
    const alert = await this.alertController.create({
      header: 'Sale Type is required',
      message: 'Please select a sale type for the home.',
      buttons: ['OK']
    });
    await alert.present();
  }

  public onSubmit(form: NgForm){
    const image1 = form.value.image1;
    const location = form.value.location;
    const price = form.value.price;
    const area = form.value.area;
    const living_rooms = form.value.living_rooms;
    const bedrooms = form.value.bedrooms;
    const bathrooms = form.value.bathrooms;
    const home_type = form.value.home_type;
    const sale_type = form.value.sale_type;

    if(image1 == ''){
      this.showAlertFailImage1();
      return;
    }
    if(location == ''){
      this.showAlertFailLocation();
      return;
    }
    if(price == ''){
      this.showAlertFailPrice();
      return;
    }
    if(area == ''){
      this.showAlertFailArea();
      return;
    }
    if(living_rooms == ''){
      this.showAlertFailLivingRooms();
      return;
    }
    if(bedrooms == ''){
      this.showAlertFailBedrooms();
      return;
    }
    if(bathrooms == ''){
      this.showAlertFailBathrooms();
      return;
    }
    if(home_type == ''){
      this.showAlertFailHomeType();
      return;
    }
    if(sale_type == ''){
      this.showAlertFailSaleType();
      return;
    }

    const home = form.value;
    this.service.addHome(home, form.value.sale_type).subscribe(response =>{
      if(response != null){
        localStorage.setItem('home_id', String(response));
        const user_type = localStorage.getItem('user_type');
        this.router.navigate(['/profile-' + user_type]);
      }
    });
    const User_id = parseInt(localStorage.getItem('user_id'));
    const Home_id = parseInt(localStorage.getItem('home_id'));
    var user_home : User_Home = {
      user_id: User_id,
      home_id: Home_id
    }
    console.log(user_home);
    this.service.addHomeToUser(user_home, form.value.sale_type).subscribe(response =>{
      if(response != null){
        console.log("added home successfully");
      }
    });
  }

}
