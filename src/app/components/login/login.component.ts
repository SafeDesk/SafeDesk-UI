import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  get Email():FormControl{
   return this.loginForm.get('email')as FormControl;
   }
   get PWD():FormControl{
   return this.loginForm.get('password') as FormControl;
   }

  loginSubmited(){
    console.log(this.loginForm);
    alert("Successful Login");
  }
}
