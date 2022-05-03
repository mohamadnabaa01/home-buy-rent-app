import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

export interface Home{
  rent_home_id: number,
  image1: string,
  image2: string,
  image3: string,
  location: string,
  price: string,
  area: number,
  living_rooms: number,
  bedrooms: number,
  bathrooms: number,
  home_type: string
}

export interface User{
  first_name: string,
  last_name: string,
  email_address: string,
  phone_number: string
}

@Injectable({
  providedIn: 'root'
})
export class HomesForRentMoreInfoService {

  private url = 'http://localhost/HomeBuyRentApp/';

  constructor(private http: HttpClient, private storage: Storage) { }

  getHomeForRent(){
    const home_id = localStorage.getItem('home-for-rent-id');
    return this.http.get<[Home]>(this.url + 'homes-for-rent-more-info.php?home_id='+home_id);
  }
  getUser(){
    const home_id = localStorage.getItem('home-for-rent-id');
    return this.http.get<[User]>(this.url + 'homes-for-rent-user.php?home_id='+home_id);
  }
}
