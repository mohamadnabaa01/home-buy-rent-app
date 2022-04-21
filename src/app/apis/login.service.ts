import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface User{
  id: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost/home-car-buy-rent-db";

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<[User]>(this.url + "api.php");
  }
}
