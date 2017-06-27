import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { HttpModule }          from '@angular/http';

import { AppComponent }        from './app.component';
import { Routing }             from './app.routing';

import { MessageComponent}     from './_directives/index';

import { HeaderComponent }     from './header/index';
import { WelcomeComponent }    from './welcome/index';
import { LoginComponent }      from './login/index';
import { JoinUsComponent }     from './joinus/index';
import { HomeComponent }       from './home/index';

import { CustomHttpProvider }  from './_helpers/index';
import { AuthHelp }            from './_helpers/index';
import { MessageService }      from './_services/index';
import { UserService }         from './_services/index';
import { LoginService }        from './_services/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Routing
    ],
    declarations: [
        AppComponent,
        MessageComponent,
        HeaderComponent,
        WelcomeComponent,
        LoginComponent,
        JoinUsComponent,
        HomeComponent
    ],
    providers: [
        CustomHttpProvider,
        AuthHelp,
        MessageService,
        UserService,
        LoginService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }