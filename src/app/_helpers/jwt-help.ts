import { Injectable } from '@angular/core'; 
import { Headers, RequestOptions } from '@angular/http';

@Injectable() 
export class JwtHelp { 
    
    public jwt() {
        // Create authorization header with JWT
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('Token local: ' + currentUser.token);
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        } 
    }
} 
