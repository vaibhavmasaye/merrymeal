import { Routes } from '@angular/router';
import { DonarInfoComponent } from './donar-info/donar-info.component';
import { TransationInfoComponent } from './transation-info/transation-info.component';
import {CreateMenuComponent} from './create-menu/create-menu.component';
import {DisplayMenuComponent} from './display-menu/display-menu.component';

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
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'display-menu',
    component: DisplayMenuComponent
  }
];
export default appRoutes;