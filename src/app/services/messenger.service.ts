import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  constructor() {}

  sendMsg(task) {
    // console.log(task);
    this.subject.next(task);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  getToken() {
    return 'eyJhbGciOiJIUzI1NiJ9.eyJwYXJlbnRfaWQiOiIzOTE5MjcyZC03MWNiLTRjYTYtOTNiOC01ZGVkNzljYWYyYzAiLCJleHBpcnlfdGltZSI6IjIwMjItMTItMDIgMTc6MDM6MDggKzAwMDAiLCJpc0NoaWxkIjpmYWxzZX0.IHBUWoX47EIicshmL4n0rPP0GvLOtNYJ3JnsmchmxLk';
  }
}
