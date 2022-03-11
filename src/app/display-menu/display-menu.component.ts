import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  constructor(
    private HttpService:ServiceService,
  ) { }

  foodType: any
  menuData: any
  typeArray: any


  ngOnInit(): void {
    this.foodType = 'veg'
    this.getMenu()
    this.typeArray = [
      { name: 'Veg', value: 'veg'},
      { name: 'Non-Veg', value: 'non-veg'},
      { name: 'Nutritional', value: 'nutritional'}
    ]
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


}
