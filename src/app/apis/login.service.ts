import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface User{
  email_address: string, 
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost/HomeCarBuyRentApp/";

  constructor(private http: HttpClient) { }

  checkUser(user : User){
    return this.http.post(this.url + 'login.php', user);
  }
}
