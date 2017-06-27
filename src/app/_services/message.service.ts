import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { Subject } from 'rxjs/Subject'; 

@Injectable() 
export class MessageService { 
    private subject = new Subject<any>();
    
    warning(message: string) {
        this.subject.next({type: 'warning', text: message, show: true, time: 0})
    }
    
    error(message: string) {
        this.subject.next({type: 'danger', text: message, show: true, time: 0})
    }
    
    primary(message: string) {
        this.subject.next({type: 'primary', text: message, show: true, time: 0})
    }
    
    success(message: string) {
        this.subject.next({type: 'success', text: message, show: true, time: 0})
    }
    
    info(message: string) {
        this.subject.next({type: 'info', text: message, show: true, time: 0})
    }
    
    getMessage(): Observable<any> { 
        return this.subject.asObservable(); 
    }
}
