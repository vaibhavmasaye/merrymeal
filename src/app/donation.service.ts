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

  ListUsers() {
    return this.http.get(this.Url+'/listAlluser');
  }

  UpdateUsers(user_details:any) {
    return this.http.post(this.Url+'/updateUserInfobyUid', user_details);
  }

  DeleteUsers(id:any) {
    return this.http.delete(this.Url+'/deleteUser_Detail/'+id );
  }

  Sendnotification(email_id:any) {
    return this.http.post(this.Url+'/notification',email_id );
  }

}