import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs/Subscription';
import { MessageService }               from '../_services/message.service';

@Component({ 
    moduleId: module.id.toString(),
    selector: 'app-message', 
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
}) 

export class MessageComponent implements OnInit, OnDestroy {
    private msgSubscription: Subscription;
    
    private showWaitingModal: boolean;
    private messageList: any = [];
    
    constructor(private _msgServices: MessageService) {}

    ngOnInit() {
        this.showWaitingModal = false;
        this.msgSubscription = this._msgServices.getMessage().subscribe(message => {
            // Include message in the list
            this.messageList.push(message);
            
            // Delete message automatically afeter 4 seconds
            setTimeout(() => {
                this.removeMessage(message);
            }, 4000);
        });
    }

    ngOnDestroy() {
        this.msgSubscription.unsubscribe();
    }
    
    private removeMessage(message: any) {
        let index = this.messageList.indexOf(message);
        this.messageList.splice(index, 1);
    }
}