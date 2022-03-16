import { Routes } from '@angular/router';
import { DonarInfoComponent } from './donar-info/donar-info.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';
import { CaregiverRegistrationComponent } from './caregiver-registration/caregiver-registration.component';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';
import { LoginComponent } from './login/login.component';
import { FoodSafetyComponent } from './food-safety/food-safety.component';


const appRoutes: Routes = [
//    { path: '', 
//     component: HomeComponent 
//   },
  { path: 'donor-info', 
    component: DonarInfoComponent 
  },
  {
    path: 'transaction-info',
    component: TransationInfoComponent
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
  }
];
export default appRoutes;