import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-transation-info',
  templateUrl: './transation-info.component.html',
  styleUrls: ['./transation-info.component.css']
})
export class TransationInfoComponent implements OnInit {

  constructor() { }

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
  }

}
