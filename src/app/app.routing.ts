import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }   from './login/index';
import { JoinUsComponent }  from './joinus/index';
import { HomeComponent }    from './home/index';

import { AuthHelp }         from './_helpers/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthHelp] },
    { path: 'login',  component: LoginComponent },
    { path: 'joinus', component: JoinUsComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);