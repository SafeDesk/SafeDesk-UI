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
    return 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNhYml0aGEyM0BnbWFpbC5jb20iLCJwYXJlbnRfaWQiOiIzOTE5MjcyZC03MWNiLTRjYTYtOTNiOC01ZGVkNzljYWYyYzAiLCJleHBpcnlfdGltZSI6IjIwMjItMTItMDIgMjI6MDY6MDIgKzAwMDAiLCJpc0NoaWxkIjp0cnVlfQ.gb9mXCe9R3VMwDyNsCKUq2n3GfPoThDBIfx08n9hrU8';
  }
}
