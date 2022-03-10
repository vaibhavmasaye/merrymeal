import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/donation.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  donors:any
  users:any
  email_id:any
  user_role:any
  // donors= [{id:1, first_name:"Testing", last_name:"Testing", email_id:"Test@gmail.com", donation_amount:"1000",donation_date:"01-01-1010"}]
  constructor(
    private DonationService: DonationService,
  ) { }

  ngOnInit(): void {
    this.getDonorsList()
    this.getUsersList()
  }

  getDonorsList() {
    this.DonationService.ListDonor().subscribe((res) => { 
        this.donors = res;
        console.log("List of Donors: " + this.donors);
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  getUsersList() {
    this.DonationService.ListUsers().subscribe((res) => { 
        this.users = res;
        console.log("List of Users: " + this.users);
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  setValues(email_id:any,user_type:any){
    this.email_id=email_id
    this.user_role=user_type
  }

  updateUser(id:any,email_id:any,user_role:any) {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('email_id', email_id);
    formData.append('user_type', user_role);
    this.DonationService.UpdateUsers(formData).subscribe((res) => { 
        this.getUsersList();
        console.log("User Update Status: OK!");
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  deleteUser(id:any) {
    this.DonationService.DeleteUsers(id).subscribe((res) => { 
        this.getUsersList();
        console.log("User Delete Status: OK!");
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  Sendnotification(email_id:any) {
    this.DonationService.Sendnotification({email_id:email_id}).subscribe((res) => { 
        this.getUsersList();
        console.log("User notification send: OK!");
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

  

}
