import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pagenotfound/index';
import { LoginComponent }   from './login/index';
import { JoinUsComponent }  from './joinus/index';
import { HomeComponent }    from './home/index';
import { ClientComponent }  from './client/index';

import { AuthHelp }         from './_helpers/index';

const appRoutes: Routes = [
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: 'login'       , component: LoginComponent        },
    { path: 'joinus'      , component: JoinUsComponent       },
    { path: ''            , component: HomeComponent,           canActivate: [AuthHelp] },
    { path: 'client'      , component: ClientComponent,         canActivate: [AuthHelp] },
    
    // otherwise redirect to home
    { path: '**', redirectTo: 'pagenotfound' }
];

export const Routing = RouterModule.forRoot(appRoutes);