import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id: any;
  password: any;
  resData: any;

  public userLoginForm: FormGroup; 
  data: {} | undefined;
  formData: any;
  cr: any;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private HttpService:ServiceService,
  ) {
    this.userLoginForm = this.formBuilder.group({
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });
   }

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
          alert("Email or Password is incorrect, please enter correct credentails.")
          console.log("User Loggin Unuccessful")
        } else{  
          console.log("User Logged In Successfully")
          // console.log("User Data", this.resData)
          if(this.resData.user_type == "Member") {
            // this.router.navigate(['/login']);
          }
          if(this.resData.user_type == "Caregiver") {
            // this.router.navigate(['/login']);
          }
          if(this.resData.user_type == "Partner") {
            // this.router.navigate(['/login']);
          }
          if(this.resData.user_type == "Volunteer") {
            // this.router.navigate(['/login']);
          }
        }
        
      },
      (err: { message: string; }) => (this.error = err.message)
    );
  }
} 
}
