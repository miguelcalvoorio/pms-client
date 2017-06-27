import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AppFormValidators } from '../_shared/formvalidators'; 
import { UserService } from '../_services/index';
import { User } from '../_models/index';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'joinus.component.html'
})

export class JoinUsComponent implements OnInit {
    joinUsForm: FormGroup;
    model: any = {};
    
    
    constructor(
        private _builder: FormBuilder,
        private _router: Router,
        private _userService: UserService) {
    }
    
    ngOnInit() {
        this.joinUsForm = this._builder.group({
            joinUsName: ['Miguel', Validators.compose([Validators.required, Validators.minLength(5)])],
            joinUsEmail: ['miguel.calvo@accenture.com', Validators.compose([Validators.required, AppFormValidators.validateEmail])],
            joinUsCredentials: this._builder.group({
                joinUsPassword: ['Icg011223', Validators.compose([Validators.required, Validators.maxLength(50), AppFormValidators.validatePassComplexity])],
                joinUsPasswordCheck: 'Icg011223'
            }, { validator: this.arePasswordEqual })
        });
        
        //this.model = {_id: '', firstName: 'Miguel'};
        //let this.model.password = 'Icg011223';
    }
    
    private arePasswordEqual(group: FormGroup) {
        return group.controls['joinUsPassword'].value === group.controls['joinUsPasswordCheck'].value
            ? null : {'mismatch': true};
    }
    
    private joinUsSubmit() {
        this._userService.create(this.model)
            .subscribe( 
                data => { 
                    //this.alertService.success('Registration successful', true); 
                    this._router.navigate(['/login']); 
                }, 
                error => { 
                    //this.alertService.error(error); 

                }); 
    }
    
    onJoinUsSubmit() {
        this.joinUsSubmit();
    }
}