import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }   from './login/index';
import { JoinUsComponent }  from './joinus/index';
import { HomeComponent }    from './home/index';
import { ClientComponent }  from './client/index';

import { AuthHelp }         from './_helpers/index';

const appRoutes: Routes = [
    { path: 'login'   , component: LoginComponent      },
    { path: 'joinus'  , component: JoinUsComponent     },
    { path: ''        , component: HomeComponent,           canActivate: [AuthHelp] },
    //{ path: 'client'  , component: ClientComponent,         canActivate: [AuthHelp] },
    { path: 'client'  , component: ClientComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);