import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MenuPlanningServiceService} from 'src/app/menu-planning-service.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  createMenu_form = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    mondayMenu: new FormControl('', [Validators.required]),
    tuesdayMenu: new FormControl('', [Validators.required]),
    wednesdayMenu: new FormControl('', [Validators.required]),
    thursdayMenu: new FormControl('', [Validators.required]),
    fridayMenu: new FormControl('', [Validators.required]),
    foodtype: new FormControl('', [Validators.required]),
  });

  constructor(
    public router:Router,
    private MenuPlanningServiceService: MenuPlanningServiceService,
  ) { }

  ngOnInit(): void {
  }
  new_menu:any
  success:any
  error:any
  createMenu(){
    this.createMenu_form.markAllAsTouched();
    if(this.createMenu_form.valid){

        let c = this.createMenu_form.value    
        this.new_menu = {
          food_type: c.foodtype,
          first_name:c.fname,
          last_name: c.lname,
          monday: c.mondayMenu,
          tuesday:c.tuesdayMenu,
          wednesday:c.wednesdayMenu,
          thursday:c.thursdayMenu,
          friday:c.fridayMenu
          // donation_date:new Date().toISOString().slice(0,10)
          }
          console.log(this.new_menu,'this.new_menu')
          this.MenuPlanningServiceService.AddMenu(this.new_menu).subscribe((res) => { 
            this.success = " Menu added successfully";
            console.log(this.success)
            this.router.navigate(['/display-menu']);
          },
          (err: { message: string; }) => (this.error = err.message)
        );
        }   
    // console.log("Donation Form Values", this.donation_frm.value)
  }

  get u(){
    return this.createMenu_form.controls;
  }
}
