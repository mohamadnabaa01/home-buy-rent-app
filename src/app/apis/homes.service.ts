import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Home{
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
@Injectable({
  providedIn: 'root'
})
export class HomesService {

  private url = 'http://localhost/HomeBuyRentApp/';

  constructor(private http: HttpClient) { }

  getHomesForSale(){
    return this.http.get<[Home]>(this.url + 'homes-for-sale.php');
  }

  getHomesForRent(){
    return this.http.get<[Home]>(this.url + 'homes-for-rent.php');
  }

}
