import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

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

  constructor(
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
    });
  }

  ngOnInit(): void {
  }

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
      // kitchen: this.formData.kitchen,
      // sponsor: this.formData.sponsor
    };
    this.submitted = true
    if (this.createAppForm.invalid) {
      return;
    }
    else {
      this.HttpService.AddUser(this.data).subscribe((res) => { 
        console.log("Donor Added Successfully")
        // this.router.navigate(['/login']);
      },
      (err: { message: string; }) => (this.error = err.message)
    );
  }
} 
}
