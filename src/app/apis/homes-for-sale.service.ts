import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Home {
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
export class HomesForSaleService {
  private url = 'http://localhost/HomeBuyRentApp/';

  constructor(private http: HttpClient) { }

  getHomesForSale() {
    return this.http.get<[Home]>(this.url + 'homes-for-sale.php');
  }

  getHomeForSaleID(home: Home) {
    return this.http.post(this.url + 'homes-for-sale-id.php', home);
  }
}
