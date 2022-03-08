import { Routes } from '@angular/router';
import { DonarInfoComponent } from './donar-info/donar-info.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';
import { CaregiverRegistrationComponent } from './caregiver-registration/caregiver-registration.component';


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
  }
];
export default appRoutes;