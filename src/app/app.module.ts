import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonarInfoComponent } from './donar-info/donar-info.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';
import { CaregiverRegistrationComponent } from './caregiver-registration/caregiver-registration.component';
import { LoginComponent } from './login/login.component';
import { FoodSafetyComponent } from './food-safety/food-safety.component';
import { DeliveryComponentComponent } from './delivery-component/delivery-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DonarInfoComponent,
    TransationInfoComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    CreateMenuComponent,
    DisplayMenuComponent,
    PartnerRegistrationComponent,
    VolunteerRegistrationComponent,
    MemberRegistrationComponent,
    CaregiverRegistrationComponent,
    LoginComponent,
    FoodSafetyComponent,
    DeliveryComponentComponent,
    NavBarComponent,
    FooterComponent,
    IndexComponent,
    PartnerDashboardComponent,
    MemberDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
