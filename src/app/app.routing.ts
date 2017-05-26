import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

const appRoutes: Routes = [
    /* { path: '', component: HomeComponent, canActivate: [AuthGuard] }, */
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);