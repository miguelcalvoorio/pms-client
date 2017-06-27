import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { appConfig }         from '../app.config'; 
import { AppFormValidators } from '../_shared/formvalidators'; 
import { UserService }       from '../_services/index';
import { User }              from '../_models/index';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'joinus.component.html'
})

export class JoinUsComponent implements OnInit {
    joinUsForm: FormGroup;
    model: any = {};
    loading = false;
    loadingSrc = appConfig.loadingSrc;
    
    constructor(
        private _builder: FormBuilder,
        private _router: Router,
        private _userService: UserService) {
    }
    
    ngOnInit() {
        this.joinUsForm = this._builder.group({
            joinUsName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            joinUsEmail: ['', Validators.compose([Validators.required, AppFormValidators.validateEmail])],
            joinUsCredentials: this._builder.group({
                joinUsPassword: ['', Validators.compose([Validators.required, Validators.maxLength(50), AppFormValidators.validatePassComplexity])],
                joinUsPasswordCheck: ''
            }, { validator: this.arePasswordEqual })
        });
    }
    
    private arePasswordEqual(group: FormGroup) {
        return group.controls['joinUsPassword'].value === group.controls['joinUsPasswordCheck'].value
            ? null : {'mismatch': true};
    }
    
    private joinUsSubmit() {
        this.loading = true;
        this._userService.create(this.model)
            .subscribe( 
                data => { 
                    console.log('Bien');
                    //this.alertService.success('Registration successful', true); 
                    this._router.navigate(['/login']); 
                }, 
                error => { 
                    //this.alertService.error(error); 
                    this.loading = false;
                }); 
    }
    
    onJoinUsSubmit() {
        this.joinUsSubmit();
    }
}