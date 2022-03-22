import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merry-Meal';

  constructor(
    private router: Router
  ) {}

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
    
    this.router.navigate(['/login']);
  }


}
