import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  is_logged_in: any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
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
    this.is_logged_in= false;
    this.router.navigate(['/login']);
  }

}
