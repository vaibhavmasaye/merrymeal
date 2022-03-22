import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-registration',
  templateUrl: './volunteer-registration.component.html',
  styleUrls: ['./volunteer-registration.component.css']
})
export class VolunteerRegistrationComponent implements OnInit {
  first_name: any;
  last_name: any;
  email_id: any;
  password: any;
  address: any;
  contact_number: any;
  postal_code: any;
  public createAppForm: FormGroup; 
  data: {} | undefined;
  formData: any;
  cr: any;
  submitted = false;
  error = '';
  kitchen: any;
  sponsor: any;
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;  
  friday: any;
  food: any;
  prospects: any;
  ProspectsData=[
    {
      name:'Outsource kitchen', value:'outsource-kitchen'
    },
    {
      name:'Delivery', value:'delivery'
    }
  ]

  public saveUsername:boolean;
  api_message: "";

  constructor(
    public router:Router,
    private formBuilder: FormBuilder,
    private HttpService:ServiceService,
  ) { 
    this.createAppForm = this.formBuilder.group({
      first_name:['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email_id: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contact_number: ['', [Validators.required]],
      postal_code: ['', [Validators.required]],
      prospects: [''],

    });
  }

  onChange(value: any){

    this.food = value

  }
  // onChange(name: string, isChecked: boolean) {
  //   const prospects = (this.createAppForm.controls.name as FormArray);

  //   if (isChecked) {
  //     prospects.push(new FormControl(name));
  //   } else {
  //      const index = prospects.controls.findIndex(x => x.value === name);
  //      prospects.removeAt(index);
  //   }
  // }
  
  
  // onCheckboxChange(e) {
  //   const prospects: FormArray = this.createAppForm.get('prospects') as FormArray;
   
  //   if (e.target.checked) {
  //     prospects.push(new FormControl(e.target.value));
  //   } else {
  //      const index = prospects.controls.findIndex(x => x.value === e.target.value);
  //      prospects.removeAt(index);
  //   }
  // }
  
  ngOnInit(): void {
  }

  get f() { return this.createAppForm.controls; }

  Add_User(form: any){
    this.formData = form.value
    this.data = {
      first_name:this.formData.first_name,
      last_name: this.formData.last_name,
      email_id: this.formData.email_id,
      password:  this.formData.password,
      address: this.formData.address,
      contact_number: this.formData.contact_number,
      postal_code: this.formData.postal_code,
      prospects: this.food,
      user_type: "Volunteer"



    };
    this.submitted = true
    if (this.createAppForm.invalid) {
      return;
    }
    else {
      this.HttpService.AddUser(this.data).subscribe((res) => { 
        console.log("Donor Added Successfully")
        setTimeout(()=>{ 
          Swal.fire(
            'Your Details have been registered sucessfully',
            this.api_message,
            'success'
          )
        }, 0);
        this.router.navigate(['/login']);
      },
      (err: { message: string; }) => (this.error = err.message)
    );
  }
} 
}
