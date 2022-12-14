import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LoginService } from 'src/app/service/login.service';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // constructor(
  //   private router : Router,
  //   public auth: AuthService,
  //   @Inject(DOCUMENT) private doc: Document
  // ) {}
  constructor(private dialog: MatDialog ,private login: LoginService, private router : Router){}

  res: any;
  ngOnInit() {}

  openDialog() {
    this.dialog.open(SignupComponent, {
      width: '60%',
    });
  }
  signup(row: any) {
    this.dialog.open(SignupComponent, {
      width: '40%',
      data: row,
    });
  }
 // loginWithRedirect() {
   // this.auth.loginWithRedirect();
  //}

  //  logout() {
  //   this.auth.logout({ returnTo: this.doc.location.origin });
  //  }
   loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
     password: new FormControl("", [Validators.required, Validators.minLength(8)]),
     

   });

   get Email():FormControl{
    return this.loginForm.get('email')as FormControl;
    }
    get PWD():FormControl{
    return this.loginForm.get('password') as FormControl;
    }
   

//  loginSubmited(){
//   let id =(<HTMLInputElement>document.getElementById('p')).checked

//   //console.log('kl'+id);
//   //console.log(this.loginForm.person)
//  } 
 

   loginSubmited(){
    let id =(<HTMLInputElement>document.getElementById('p')).checked
    let cid =(<HTMLInputElement>document.getElementById('c')).checked
    console.log('parant' + '' +id)
    if(id == true){
      var parent = this.login.loginUser(this.loginForm.value);
     // console.log('iamparent' );
     parent.then((item)=>{
       console.log(item.token)
       localStorage.setItem('tokan_id', item.token );
       sessionStorage.setItem('tokan_id',item.token);
       this.router.navigateByUrl('dashboard');
     })
    }else if(cid == true){
      console.log('child log in works')
      var child = this.login.childlogin(this.loginForm.value);
      child.then((x)=>{
        console.log(x.token)
        localStorage.setItem('tokan_id', x.token );
        sessionStorage.setItem('tokan_id',x.token);
        this.router.navigateByUrl('dashboard');
      })
    }
    else{
      alert('Login Failed')
    }
   
    
  
   
    // this.router.navigateByUrl('dashboard');
   }
//     isloggedin():boolean{
//       //console.log('auth token' + );
//      return localStorage.getItem("item.token")?true:false;
//    }
 }
