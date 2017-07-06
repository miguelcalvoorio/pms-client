import { Component, OnInit } from '@angular/core';
import { FormBuilder }       from '@angular/forms'; 
import { FormGroup }         from '@angular/forms'; 
import { Validators }        from '@angular/forms'; 

import { appConfig }         from '../app.config'; 
import { MessageService }    from '../_services/index';
import { ClientService }     from '../_services/index';
import { Client }            from '../_models/index';
import { ServiceGroup }      from '../_models/index';
import { Industry }          from '../_models/index';
import { Country }           from '../_models/index';

import { ClientAttributeData } from '../_static/index';
import { CountryData }         from '../_static/index';

declare var jQuery:any;

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'client.component.html'
})

export class ClientComponent implements OnInit {
    clientForm   : FormGroup;
    clients      : Client[] = [];
    serviceGroups: ServiceGroup[];
    industries   : Industry[];
    countries    : Country[];
    
    editClient    : any = {};
    selectedClient: any = {};
    
    getServiceGroupName = ClientAttributeData.getServiceGroupName;
    getIndustryName = ClientAttributeData.getIndustryName;
    getCountryName = CountryData.getCountryName;
    
    loading = false;
    loadingSrc = appConfig.loadingSrc;
    
    constructor(
        private _builder       : FormBuilder,
        private _messageService: MessageService,
        private _clientService : ClientService) {
    }
    
    ngOnInit() {
        this.clientForm = this._builder.group({
            clientName        : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientIndustry    : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientServiceGroup: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            clientCountry     : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        });
        
        this.serviceGroups = ClientAttributeData.getServiceGroups();
        this.industries    = ClientAttributeData.getIndustries()
            .filter((item)=> item.idServiceGroup == this.editClient.clientServiceGroup);
        this.countries     = CountryData.getCountries();
        
        this.getAllClients();
    }
    
    private onSelectServiceGroup(idServiceGroup: string) {
        console.log(idServiceGroup);
        this.industries = ClientAttributeData.getIndustries()
            .filter((item)=> item.idServiceGroup == idServiceGroup);
    }
    
    private getAllClients() {
        this._clientService.getAll()
            .subscribe(
                data => {
                    this.clients = data;
                },
                error => {
                    this._messageService.error('Ha ido mal');
                }
            );
    }
    
    private deleteClientRequest(client: Client) {
        this.selectedClient = Object.assign({}, client); // Object copy, to avoid references
    }
    
    private editClientRequest(client: Client) {
        this.editClient = Object.assign({}, client); // Object copy, to avoid references
    }
    
    private newClientRequest() {
        this.editClient._id                = ''
        this.editClient.clientName         = '';
        this.editClient.clientServiceGroup = '';
        this.editClient.clientIndustry     = ''
        this.editClient.clientCountry      = '';
    }
    
    private deleteClient(id: string) {
        this._clientService.deleteClient(id)
            .subscribe(
                data => {
                    // Update client list
                    this.getAllClients();  
                },
                error => {
                    this._messageService.error('Ha ido mal');
                });
                
        // Close modal window
        document.getElementById("closeConfirmDeleteClient").click();
    }
    
    private clientSubmit(id: string) {
        this.loading = true;
        
        if (id == '') {
            this._clientService.create(this.editClient)
                .subscribe( 
                    data => { 
                        this._messageService.success('Ha ido bien');
                        
                        // Update client list
                        this.getAllClients();
                        
                        this.loading = false;
                        
                        // Close modal window
                        document.getElementById("closeNewClient").click();
                    }, 
                    error => { 
                        this._messageService.error(error);
                        this.loading = false;
                    }); 
        } else {
            this._clientService.updateClient(this.editClient)
                .subscribe(
                    data => {
                        this._messageService.success('Ha ido bien');
                        
                        // Update client list
                        this.getAllClients();
                        
                        this.loading = false;
                        
                        // Close modal window
                        document.getElementById("closeNewClient").click();
                    },
                    error => {
                        this._messageService.error(error);
                        this.loading = false;
                    });
        }
    }
}