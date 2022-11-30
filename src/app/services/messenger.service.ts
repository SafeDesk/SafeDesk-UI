import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

 subject = new Subject()
  constructor() { }

  sendMsg(task){
    // console.log(task);
    this.subject.next(task)
  }
  
  getMsg (){
    return this.subject.asObservable()
  }
}
