import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private login: LoginService,
    private router: Router,
    private msg: MessengerService
  ) {}

  res: any;
  ngOnInit() {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  loginSubmited() {
    let id = (<HTMLInputElement>document.getElementById('p')).checked;
    let cid = (<HTMLInputElement>document.getElementById('c')).checked;
    console.log('parant' + '' + id);
    if (id == true) {
      var parent = this.login.loginUser(this.loginForm.value);

     
   loginSubmited(){
    let id =(<HTMLInputElement>document.getElementById('p')).checked
    let cid =(<HTMLInputElement>document.getElementById('c')).checked
    console.log('parant' + '' +id)
    if(id == true){
      var parent = this.login.loginUser(this.loginForm.value);
     
     
        parent.then((item)=>{
          console.log('iamparent', item.status_code );
          if(item.status_code === 401){
            alert('The password and the email ID did not match..!!!! Kindly RECHECK!!!!')
          }
          else{
            localStorage.setItem(
                    'userToken',
                    JSON.stringify(item.token)
                  );
                  this.router.navigateByUrl('/verifyphone');
          }
     })
    }else if(cid == true){
      console.log('child log in works')
      var child = this.login.childlogin(this.loginForm.value);
      child.then((x)=>{
        console.log(x.token)
        if(x.status_code === 401){
          alert('The password and the email ID did not match..!!!! Kindly RECHECK!!!!')
        }
        else{
          localStorage.setItem(
                  'userToken',
                  JSON.stringify(x.token)
                );
                this.router.navigateByUrl('/dashboard');
        }
      })
    }
    else{
          localStorage.setItem(
                  'userToken',
                  JSON.stringify(x.token)
                );
                this.router.navigateByUrl('/dashboard');
        }
      })

    }
  }
}
