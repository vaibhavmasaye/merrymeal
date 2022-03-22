import { Routes } from '@angular/router';
import { DonarInfoComponent } from './donar-info/donar-info.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import {CreateMenuComponent} from './create-menu/create-menu.component';
import {DisplayMenuComponent} from './display-menu/display-menu.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';
import { CaregiverRegistrationComponent } from './caregiver-registration/caregiver-registration.component';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';
import { LoginComponent } from './login/login.component';
import { FoodSafetyComponent } from './food-safety/food-safety.component';
import { DeliveryComponentComponent } from './delivery-component/delivery-component.component';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';

const appRoutes: Routes = [
//    { path: '', 
//     component: HomeComponent 
//   },
  { path: 'donor-info', 
    component: DonarInfoComponent 
  },
  { path: 'partner-dashboard', 
    component: PartnerDashboardComponent 
  },
  { path: 'member-dashboard', 
  component: MemberDashboardComponent 
},
  {
    path: 'transaction-info',
    component: TransationInfoComponent
  },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'edit-menu/:id',
    component: CreateMenuComponent
  },
  {
    path: 'display-menu',
    component: DisplayMenuComponent
  },
  {
    path: 'partner-register',
    component: PartnerRegistrationComponent
  },
  {
    path: 'volunteer-register',
    component: VolunteerRegistrationComponent
  },
  {
    path: 'caregiver-register',
    component: CaregiverRegistrationComponent
  },
  {
    path: 'member-register',
    component: MemberRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'food-safety',
    component: FoodSafetyComponent
  },
  {
    path: 'delivery-status',
    component: DeliveryComponentComponent
  }
];
export default appRoutes;