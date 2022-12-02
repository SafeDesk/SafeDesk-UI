import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  token: string = '';
  is_parent!: boolean;
  constructor() {}

  sendMsg(task) {
    // console.log(task);
    this.subject.next(task);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  getToken() {
    this.token = JSON.parse(localStorage.getItem('userToken') || '');
    return this.token;
  }

  isParent() {
    this.is_parent = JSON.parse(localStorage.getItem('isParent') || '');
    return this.is_parent;
  }
}
