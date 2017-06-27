import { Injectable } from '@angular/core'; 
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 

import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject'; 

@Injectable() 
export class AuthHelp implements CanActivate { 
    private subject = new Subject<any>();
    
    constructor(private router: Router) { } 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
        if (localStorage.getItem('currentUser')) { 
            // logged in so return true after update global variables
            this.subject.next(JSON.parse(localStorage.getItem('currentUser')));
            return true; 
        } 
        
        // not logged in so redirect to login page with the return url 
        this.subject.next();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }}); 
        return false; 
    }
    
    getCurrentUser() : Observable<any> { 
        return this.subject.asObservable(); 
    }
} 
