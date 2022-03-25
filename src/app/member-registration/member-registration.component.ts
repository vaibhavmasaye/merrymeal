import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css']
})
export class MemberRegistrationComponent implements OnInit {

  first_name: any;
  last_name: any;
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
  public createMemberForm: FormGroup; 
  data: {} | undefined;
  formData: any;
  cr: any;
  submitted = false;
  error = '';

  fileName = '';
  file_doc: any;
  fileresData: any;
  api_message: string;

  constructor(
    private formBuilder: FormBuilder,
    private HttpService:ServiceService,
    private router: Router
  ) {
    this.createMemberForm = this.formBuilder.group({
      first_name:['', [Validators.required]],
      last_name: ['', [Validators.required]],
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

    }, { 
      validator: this.ConfirmedValidator('password', 'cpassword')
    });
   }

  ngOnInit(): void {
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  onFileSelected(event:any, doc_type:any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        this.file_doc = file
        console.log("File", this.file_doc)
    }
  }

  get f() { return this.createMemberForm.controls; }

  Add_Member(form: any){
    this.formData = form.value
    this.data = {
      first_name:this.formData.first_name,
      last_name: this.formData.last_name,
      dob: this.formData.dob,
      gender: this.formData.gender,
      email_id: this.formData.email_id,
      address: this.formData.address,
      contact_number: this.formData.contact_number,
      postal_code: this.formData.postal_code,
      reason: this.formData.reason,
      password:  this.formData.password,
      user_type: "Member"
    };
    this.submitted = true
    if (this.createMemberForm.invalid) {
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
            first_name:this.formData.first_name,
            last_name: this.formData.last_name,
            dob: this.formData.dob,
            gender: this.formData.gender,
            email_id: this.formData.email_id,
            address: this.formData.address,
            contact_number: this.formData.contact_number,
            postal_code: this.formData.postal_code,
            reason_to_join: this.formData.reason,
            medical_certificate: this.certificate,
            password:  this.formData.password,
            user_type: "Member"
          };

          this.HttpService.AddUser(this.data).subscribe((res) => { 
            // console.log("Member Added Successfully")
            // alert("Member Registered Successfully!\n\nClick ok to Login.")
            // this.router.navigate(['/login']);
            
              Swal.fire(
                'Member Registration Sucessful',
                this.api_message,
                'success'
              ).then(() => {
                this.router.navigate(['/login']);
              })
            
            
          },
          (err: { message: string; }) => (this.error = err.message)
          );

        },
        (err) => {
          console.log(err);
        }
      );
    
    }
  }; 

}
