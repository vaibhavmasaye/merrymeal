import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpParams } from '@angular/common/http';

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


  id: any;
  

  constructor(
    public router:Router,
    public route: ActivatedRoute,
    private ServiceService: ServiceService,
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.url[0].path === 'edit-menu'){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMenuById();
  }
  }
  new_menu:any
  success:any
  error:any
  menuData: any;
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
          this.ServiceService.AddMenu(this.new_menu).subscribe((res) => { 
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

  getMenuById(){
    this.ServiceService.GetMenuId(this.id).subscribe((res) => {
      console.log(res)
      this.menuData = res
      this.createMenu_form.patchValue({
        fname: this.menuData.first_name,
    lname: this.menuData.last_name,
    mondayMenu:  this.menuData.monday,
    tuesdayMenu:  this.menuData.tuesday,
    wednesdayMenu:  this.menuData.wednesday,
    thursdayMenu:  this.menuData.thursday,
    fridayMenu:  this.menuData.friday,
    foodtype:  this.menuData.food_type,
      })
    },
    (err: { message: string; }) => (this.error = err.message)
  );
  }

  
  editMenu(){
    const params = new FormData();
    params.append('id', this.id)
    this.createMenu_form.markAllAsTouched();
    if(this.createMenu_form.valid){
      let c = this.createMenu_form.value
      params.append('food_type', c.foodtype)
      params.append('monday', c.mondayMenu)
      params.append('tuesday', c.tuesdayMenu)
      params.append('wednesday', c.wednesdayMenu)
      params.append('thursday', c.thursdayMenu)
      params.append('friday', c.fridayMenu)
    }
    console.log(params)
    this.ServiceService.EditMenu(params).subscribe((res) => { 
      this.success = " Menu added successfully";
      console.log(this.success)
      this.router.navigate(['/display-menu']);
    },
    (err: { message: string; }) => (this.error = err.message)
  );
  }
  
}
