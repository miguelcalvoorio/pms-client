import { Routes, RouterModule } from '@angular/router';

import { SignInComponent }  from './signin/index';
import { JoinUsComponent }  from './joinus/index';

const appRoutes: Routes = [
    /* { path: '', component: HomeComponent, canActivate: [AuthGuard] }, */
    { path: '', component: SignInComponent },
    { path: 'login',  component: SignInComponent },
    { path: 'joinus', component: JoinUsComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);