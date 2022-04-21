import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, LoginService } from 'src/app/apis/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  users: User[];

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(response => {
      this.users = response;
    });
    //*ngFor="let course of courses
    //course.crn
    //addNewCourse(course:Course){
    //return this.http.post(this.url + "post.php", JSON.stringify(course))
  }//
  //this.http.post<>

  GoToRegister() {
    this.router.navigate(['/register']);
  }

  GoToHomePage() {
    this.router.navigate(['/home-page']);
  }

}
