import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  subject = new Subject();
  constructor() { }

  sendMsg(msg){
    this.subject.next(msg);
  }
  rcnMsg(){
    return this.subject.asObservable();
  }
}
