import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { appConfig }         from '../app.config'; 
import { MessageService }    from '../_services/index';
import { ClientService }     from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'client.component.html'
})

export class ClientComponent implements OnInit {
    clientForm: FormGroup;
    model: any = {};
    loading = false;
    loadingSrc = appConfig.loadingSrc;
    
    constructor(
        private _builder: FormBuilder,
        private _messageService: MessageService,
        private _clientService: ClientService) {
    }
    
    ngOnInit() {
        this.clientForm = this._builder.group({
            clientName        : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientIndustry    : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientServiceGroup: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientCountry     : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        });
    }  
    
    private clientSubmit() {
        this.loading = true;
        this._clientService.create(this.model)
            .subscribe( 
                data => { 
                    this._messageService.success('Ha ido bien');
                    this.loading = false;
                }, 
                error => { 
                    this._messageService.error('Ha ido mal');
                    this.loading = false;
                }); 
    }
    
    OnClientSubmit() {
        this.clientSubmit();
    }
}