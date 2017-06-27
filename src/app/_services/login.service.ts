import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    
    login(userName: string, password: string) {
        return this.http.post('/users/login', {userName: userName, password: password}).map((response: Response) => {
            // Login sucessful if there is a JWT token in the response
            let user = response.json();
            if (user && user.token) {
                // Store user details and JWT token in local storage to keep user logged between pages refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }
    
    logout() {
        // Remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}