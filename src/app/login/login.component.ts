import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { appConfig }      from '../app.config'; 
import { MessageService } from '../_services/index';
import { LoginService }   from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    showRememberNextTime = false;
    loadingSrc = appConfig.loadingSrc;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private loginService: LoginService) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.loginService.login(this.model.userName, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.messageService.error('Ha ido mal');
                    this.loading = false;
                }
            );
    }
    
    private loginSubmit() {
        this.login();
    }

    onLoginSubmit() {
        this.loginSubmit();
    }
}