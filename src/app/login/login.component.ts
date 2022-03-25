import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id: any;
  password: any;
  resData: any;
  api_message: "";
  
  public userLoginForm: FormGroup; 
  data: {} | undefined;
  formData: any;
  cr: any;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private HttpService:ServiceService,
    private router: Router
  ) {
    this.userLoginForm = this.formBuilder.group({
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });
   }
   loggged_user_email: any;
  is_logged_in: any;


  ngOnInit(): void {
    
  }

  get f() { return this.userLoginForm.controls; }

  login(form: any){
    this.formData = form.value
    this.data = {
      
      email_id: this.formData.email_id,
      password:  this.formData.password

    };
    this.submitted = true
    if (this.userLoginForm.invalid) {
      return;
    }
    else {
      this.HttpService.loginUser(this.data).subscribe((res) => { 
        this.resData = res
        if(this.resData == null){
          // alert("Email or Password is incorrect, please enter correct credentails.")
          // console.log("User Login Unuccessful")
          Swal.fire(
            'Email or Password is incorrect, please enter correct credentails.',
            this.api_message,
            'error'
          )
        } else{  
          console.log("User Logged In Successfully")
          // console.log("User Data", this.resData)
          localStorage.setItem("user_id", this.resData.id);
          localStorage.setItem("user_type", this.resData.user_type);
          localStorage.setItem("first_name", this.resData.first_name);
          localStorage.setItem("last_name", this.resData.last_name);
          localStorage.setItem("caregiver_first_name", this.resData.caregiver_first_name);
          localStorage.setItem("caregiver_last_name", this.resData.caregiver_last_name);
          localStorage.setItem("email", this.resData.email_id);
          localStorage.setItem("contact_number", this.resData.contact_number);
          localStorage.setItem("medical_certificate", this.resData.medical_certificate);
          localStorage.setItem("address", this.resData.address);
          localStorage.setItem("postal_code", this.resData.postal_code);
          localStorage.setItem("organisation_name", this.resData.organisation_name);
          localStorage.setItem("organisation_site", this.resData.organisation_site);
          localStorage.setItem("menu", this.resData.menu);
          localStorage.setItem("prospects", this.resData.prospects);
          localStorage.setItem("dob", this.resData.dob);
          localStorage.setItem("gender", this.resData.gender);
          localStorage.setItem("volunteer_availability", this.resData.volunteer_availability);
          localStorage.setItem("is_logged_in","true");
         

            Swal.fire(
              'User Logged in Sucessfully',
              this.api_message,
              'success'
            ).then(() => {
              if(this.resData.user_type == "Member") {
                this.router.navigate(['/member-dashboard'])
                .then(() => {
                  window.location.reload();
                });
                
              }
              if(this.resData.user_type == "Caregiver") {
                this.router.navigate(['/member-dashboard'])
                .then(() => {
                  window.location.reload();
                });
              }
              if(this.resData.user_type == "Partner") {
                this.router.navigate(['/partner-dashboard'])
                .then(() => {
                  window.location.reload();
                });
              }
              if(this.resData.user_type == "Volunteer") {
                this.router.navigate(['/partner-dashboard'])
                .then(() => {
                  window.location.reload();
                });
              }
             
            })

        }
        
      },
      (err: { message: string; }) => (this.error = err.message)
    );
  }
} 
}
