import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-transation-info',
  templateUrl: './transation-info.component.html',
  styleUrls: ['./transation-info.component.css']
})
export class TransationInfoComponent implements OnInit {
  api_message: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    $(document).ready(function () {
      $('#verticalTab').easyResponsiveTabs({
      type: 'vertical', //Types: default, vertical, accordion
      });

      $("ul.nav-tabs a").click(function (e: Event) {
        e.preventDefault();  
          $(event?.target).tab('show');
      });
      
    });
    this.Sucessfully();

  }

  Sucessfully(){
    Swal.fire(
      'Your Donation is Sucessfully',
      this.api_message,
      'success'
    ).then(() => {
      this.router.navigate(['/home'])
     
    })
  };
  

}
