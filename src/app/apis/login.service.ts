import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface User{
  id: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost/home_car_buy_rent_db/";

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<[User]>(this.url + "login.php");
  }
}
