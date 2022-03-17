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
  GetMenu(foodtype: any){
    return this.http.get(this.Url+ '/getMenubytype/' + foodtype)
  }
  AddMenu(data:any){
    return this.http.post(this.Url+'/AddMenu', data);
  }
  DeleteMenu(id:any){
    return this.http.delete(this.Url+'/deleteMenu/' + id);
  }
  EditMenu(params:any){
    return this.http.post(this.Url + '/updateMenubyid/',  params)
  }

  GetMenuId(id: any){
    return this.http.get(this.Url + '/getMenubyid/' + id)
  }

}
