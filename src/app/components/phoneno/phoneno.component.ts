import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

var fbAuthConfig = {
  apiKey: "AIzaSyA75iL5tY1hHg4uFZuZznjjHBbdStpZJpc",
  authDomain: "safe-desk.firebaseapp.com",
  projectId: "safe-desk",
  storageBucket: "safe-desk.appspot.com",
  messagingSenderId: "214996209107",
  appId: "1:214996209107:web:d3c20ac7fa3a770818b326"
}

@Component({
  selector: 'app-phoneno',
  templateUrl: './phoneno.component.html',
  styleUrls: ['./phoneno.component.css']
})
export class PhonenoComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier!: any;
  openEnterOTPModel : boolean = false;
  otp!: string;
  verify: any;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  constructor(private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    firebase.initializeApp(fbAuthConfig);
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }



  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );
        this.ngZone.run(() => {
          // this.router.navigate(['/code']);
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);

      });
      this.openEnterOTPModel = !this.openEnterOTPModel;
  }
  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }
}
