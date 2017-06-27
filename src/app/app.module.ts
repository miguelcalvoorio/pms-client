import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { HttpModule }          from '@angular/http';

import { AppComponent }        from './app.component';
import { Routing }             from './app.routing';

import { HeaderComponent }     from './header/index';
import { WelcomeComponent }    from './welcome/index';
import { SignInComponent }     from './signin/index';
import { JoinUsComponent }     from './joinus/index';

import { CustomHttpProvider }  from './_helpers/index';
import { UserService }         from './_services/index';

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
        HeaderComponent,
        WelcomeComponent,
        SignInComponent,
        JoinUsComponent,
    ],
    providers: [
        CustomHttpProvider,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }