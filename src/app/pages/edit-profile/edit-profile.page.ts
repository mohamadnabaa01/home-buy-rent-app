import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User, ProfileService } from 'src/app/apis/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  User: [User];

  constructor(private router:Router, private service: ProfileService, private alertController: AlertController) { }

  ngOnInit() {
    this.service.getProfile().subscribe(response=>{
      if(response != null)
        this.User = response;
        console.log(this.User);
    })
  }
  async showAlertFailFirstName(){
    const alert = await this.alertController.create({
      header: 'New first name is empty',
      message: 'Please enter a valid new first name, else enter same as current.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailLastName(){
    const alert = await this.alertController.create({
      header: 'New last name is empty',
      message: 'Please enter a valid new last name, else enter same as current.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailEmailAddress(){
    const alert = await this.alertController.create({
      header: 'New email address is empty',
      message: 'Please enter a valid new email address, else enter same as current.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailPhoneNumber(){
    const alert = await this.alertController.create({
      header: 'New phone number is empty',
      message: 'Please enter a valid new phone number, else enter same as current.',
      buttons: ['OK']
    });
    await alert.present();
  }
  public onSubmit(form: NgForm){
    const first_name = form.value.first_name;
    const last_name = form.value.last_name;
    const email_address = form.value.email_address;
    const phone_number = form.value.phone_number;

    if(first_name == ''){
      this.showAlertFailFirstName();
      return;
    }
    if(last_name == ''){
      this.showAlertFailLastName();
      return;
    }
    if(email_address == ''){
      this.showAlertFailEmailAddress();
      return;
    }
    if(phone_number == ''){
      this.showAlertFailPhoneNumber();
      return;
    }
    const user = form.value;
    console.log(user);
    this.service.checkProfileChanges(user).subscribe(response=>{
      if(response != null){
        console.log("Changes applied successfully");
      }
    })
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }


}
