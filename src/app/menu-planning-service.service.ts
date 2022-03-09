import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuPlanningServiceService {
  Url = 'http://localhost:9092/merrymeal';

  constructor(private http: HttpClient) {
   }
   AddMenu(data:any){
     return this.http.post(this.Url+'/AddMenu', data);
   }
}
