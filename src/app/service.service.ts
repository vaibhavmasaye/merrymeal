import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Url = 'http://localhost:9092/merrymeal';

  constructor(private http: HttpClient) {}

  AddUser(data: any) {
    return this.http.post(this.Url+'/register', data);
  }

  loginUser(data: any) {
    return this.http.post(this.Url+'/login', data);
  }

  uploadMedicalCertificate(data: any){
    return this.http.post(this.Url+'/MedicalCertificateupload', data)
  }

}
