import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs/Subscription';
import { Router, ActivatedRoute }       from '@angular/router';

import { AuthHelp }     from '../_helpers/index';
import { LoginService } from '../_services/index';
import { User }         from '../_models/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    private userSubscription: Subscription;
    currentUser: any;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authHelp: AuthHelp,
        private loginService: LoginService) { }
    
    ngOnInit() {
        this.userSubscription = this.authHelp.getCurrentUser().subscribe(user => {
            this.currentUser = user;
        });
    }   
    
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    
    private signOut() {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}