import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caregiver-registration',
  templateUrl: './caregiver-registration.component.html',
  styleUrls: ['./caregiver-registration.component.css']
})
export class CaregiverRegistrationComponent implements OnInit {

  first_name: any;
  last_name: any;
  member_first_name: any;
  member_last_name: any;
  dob: any;
  gender: any;
  email_id: any;
  cpassword: any;
  password: any;
  address: any;
  contact_number: any;
  postal_code: any;
  reason: any;
  certificate: any;
  public createCaregiverForm: FormGroup; 
  data: {} | undefined;
  formData: any;
  cr: any;
  submitted = false;
  error = '';

  fileName = '';
  file_doc: any;
  fileresData: any;

  constructor(
    private formBuilder: FormBuilder,
    private HttpService:ServiceService,
    private router: Router
  ) {
    this.createCaregiverForm = this.formBuilder.group({
      first_name:['', [Validators.required]],
      last_name: ['', [Validators.required]],
      member_first_name:['', [Validators.required]],
      member_last_name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email_id: ['', [Validators.required, Validators.email]],
      contact_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required]],
      postal_code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      reason: ['', [Validators.required]],
      certificate: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]

    });
   }

  ngOnInit(): void {
  }

  onFileSelected(event:any, doc_type:any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        this.file_doc = file
        console.log("File", this.file_doc)
    }
  }

  get f() { return this.createCaregiverForm.controls; }

  Add_Caregiver(form: any){
    this.formData = form.value
    this.data = {
      caregiver_first_name:this.formData.first_name,
      caregiver_last_name: this.formData.last_name,
      first_name:this.formData.member_first_name,
      last_name: this.formData.member_last_name,
      dob: this.formData.dob,
      gender: this.formData.gender,
      email_id: this.formData.email_id,
      address: this.formData.address,
      contact_number: this.formData.contact_number,
      postal_code: this.formData.postal_code,
      reason: this.formData.reason,
      password:  this.formData.password,
      user_type: "Caregiver"

    };
    this.submitted = true
    if (this.createCaregiverForm.invalid) {
      return;
    }
    else {

      const fileData = new FormData();

      fileData.append('file', this.file_doc);
      fileData.append('userid', "1");
      console.log("FormData", fileData)
      this.HttpService.uploadMedicalCertificate(fileData).subscribe((res) => { 
          console.log("File Response", res);
          this.fileresData = res
          this.certificate = this.fileresData.fileDownloadUri
          
          this.data = {
            caregiver_first_name:this.formData.first_name,
            caregiver_last_name: this.formData.last_name,
            first_name:this.formData.member_first_name,
            last_name: this.formData.member_last_name,
            dob: this.formData.dob,
            gender: this.formData.gender,
            email_id: this.formData.email_id,
            address: this.formData.address,
            contact_number: this.formData.contact_number,
            postal_code: this.formData.postal_code,
            reason: this.formData.reason,
            medical_certificate: this.certificate,
            password:  this.formData.password,
            user_type: "Caregiver"
          };

          this.HttpService.AddUser(this.data).subscribe((res) => { 
            console.log("Caregiver Added Successfully")
            alert("Caregiver Registered!\n\nClick ok to Login.")
            this.router.navigate(['/login']);
          },
          (err: { message: string; }) => (this.error = err.message)
          );

        },
        (err) => {
          console.log(err);
        }
      );

  }
} 
}