import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) {}
    
    create (user: User) {
        return this.http.post('/users/register', user, this.jwt()).map((response: Response) => {});
    }
    
    // private helper methods
    private jwt() {
        // Create authorization header with JWT
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        } 
    }
}