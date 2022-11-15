import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private router : Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}


  ngOnInit() {}

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  // logout() {
  //   this.auth.logout({ returnTo: this.doc.location.origin });
  // }
  // loginForm = new FormGroup({
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required, Validators.minLength(8)])
  // });

  // get Email():FormControl{
  //  return this.loginForm.get('email')as FormControl;
  //  }
  //  get PWD():FormControl{
  //  return this.loginForm.get('password') as FormControl;
  //  }

  loginSubmited(){
    this.router.navigateByUrl('dashboard');
  }
}
