import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DonationService {

  Url = 'http://localhost:9092/merrymeal';

  constructor(private http: HttpClient) {}

  AddDonor(data: any) {
    return this.http.post(this.Url+'/add_donor_info', data);
  }

  ListDonor() {
    return this.http.get(this.Url+'/listAlldonarinfo');
  }

}