import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  constructor(
    private HttpService:ServiceService,
  ) { }

  foodType = 'veg'
  menuData: any
  typeArray: any


  ngOnInit(): void {
    // this.foodType = 'veg'
    // this.getMenu()
    this.typeArray = [
      { name: 'Veg', value: 'veg', checked: true},
      { name: 'Non-Veg', value: 'non-veg', checked: false},
      { name: 'Nutritional', value: 'nutritional', checked: false}
    ]
    this.setFoodType('veg');
  }

  setFoodType(value: any){
    this.foodType = value
    console.log('foodtype', this.foodType)
    this.getMenu();
  }

  getMenu(){
    this.HttpService.GetMenu(this.foodType).subscribe((res)=>{
      console.log('res======', res);
      this.menuData = res
    },
      (err: { message: string; }) => console.log(err.message)
      );
  }

  deleteMenu(id : any){
    console.log('id========', id)
    this.HttpService.DeleteMenu(id).subscribe((res) => {
      console.log('res')
      this.getMenu()
    },
    (err: {message: string})=> console.log(err.message))
  }



}
