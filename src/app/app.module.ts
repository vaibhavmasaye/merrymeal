import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonarInfoComponent } from './donar-info/donar-info.component';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';

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
    VolunteerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
