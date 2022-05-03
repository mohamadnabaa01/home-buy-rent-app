import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User, ProfileService } from 'src/app/apis/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  User: [User];

  constructor(private router:Router, private service: ProfileService) { }

  ngOnInit() {
    this.service.getProfile().subscribe(response=>{
      if(response != null)
        this.User = response;
        console.log(this.User);
    })
  }
  public onSubmit(form: NgForm){
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
