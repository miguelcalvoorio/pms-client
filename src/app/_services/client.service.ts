import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { JwtHelp } from '../_helpers/index';
import { Client }  from '../_models/index';

@Injectable()
export class ClientService {
    constructor(
        private http: Http,
        private jwtHelp: JwtHelp) {}
    
    create (client: Client) {
        return this.http.post('/clients/new', client, this.jwtHelp.jwt()).map((response: Response) => {});
    }
}