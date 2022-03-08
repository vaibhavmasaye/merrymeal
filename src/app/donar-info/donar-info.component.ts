import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationService } from 'src/app/donation.service';
@Component({
  selector: 'app-donar-info',
  templateUrl: './donar-info.component.html',
  styleUrls: ['./donar-info.component.css']
})
export class DonarInfoComponent implements OnInit {

  donation_frm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    phone_number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    don_amount: new FormControl('', Validators.required),
    email_id: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    public router:Router,
    private DonationService: DonationService,
  ) { }

  ngOnInit(): void {
  }
  new_donor:any
  success:any
  error:any
  donate(){
    this.donation_frm.markAllAsTouched();
    if(this.donation_frm.valid){

        let c = this.donation_frm.value    
        this.new_donor = {
          first_name:c.fname,
          last_name: c.lname,
          email_id: c.email_id,
          phone_number: c.phone_number,
          address: c.address,
          city: c.city,
          state: c.state,
          zip_code:c.zipcode,
          donation_amount:c.don_amount,
          // donation_date:new Date().toISOString().slice(0,10)
          }
          this.DonationService.AddDonor(this.new_donor).subscribe((res) => { 
            this.success = " Donor Added Successfully";
            console.log(this.success)
            this.router.navigate(['/transaction-info']);
          },
          (err: { message: string; }) => (this.error = err.message)
        );
        }   
    // console.log("Donation Form Values", this.donation_frm.value)
  }

  get u(){
    return this.donation_frm.controls;
  }

}
