import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  loggged_user_email: any;
  is_logged_in: any;

  ngOnInit(): void {
    
    if(localStorage.getItem("is_logged_in")){
      this.loggged_user_email = localStorage.getItem("email")
      this.is_logged_in = localStorage.getItem("is_logged_in")
     
      console.log(this.is_logged_in, "LOGGED IN")
    }
    else{
      this.is_logged_in= false;
    }
    
  }

  logoutUser(){
    console.log("User Logged Out")
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("caregiver_first_name");
    localStorage.removeItem("caregiver_last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("contact_number");
    localStorage.removeItem("medical_certificate");
    localStorage.removeItem("address");
    localStorage.removeItem("postal_code");
    localStorage.removeItem("organisation_name");
    localStorage.removeItem("organisation_site");
    localStorage.removeItem("menu");
    localStorage.removeItem("prospects");
    localStorage.removeItem("dob");
    localStorage.removeItem("gender");
    localStorage.removeItem("volunteer_availability");
    localStorage.removeItem("is_logged_in");
    this.router.navigate(['/login']);
  }


}
