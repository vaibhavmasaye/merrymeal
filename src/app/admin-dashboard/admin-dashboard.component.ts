import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/donation.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  donors:any
  // donors= [{id:1, first_name:"Testing", last_name:"Testing", email_id:"Test@gmail.com", donation_amount:"1000",donation_date:"01-01-1010"}]
  constructor(
    private DonationService: DonationService,
  ) { }

  ngOnInit(): void {
    this.getDonorsList()
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

}
