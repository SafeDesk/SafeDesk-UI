import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  flag: boolean = false;
  list = [
    {
      name: 'Parent',
      id: 'sp',
      v: 'parent',
    },
    {
      name: 'Child',
      id: 'sc',
      v: 'child',
    },
  ];

confirmpassword:string ='none';

  constructor(private userData: LoginService) {

  }

  getUserFormData(data: any) {
    let CPWD = (<HTMLInputElement>document.getElementById('cpwd')).value;
    let SPWD = (<HTMLInputElement>document.getElementById('spwd')).value;
    if (CPWD == SPWD) {

      let id = (<HTMLInputElement>document.getElementById('sp')).checked;

      // this.flag = true;
      console.log(id);
      if (id == true) {
        console.log(data);
        this.userData.createparent(data).subscribe((result) => {
          console.warn(result);
        });
      } else {
        this.userData.createchild(data).subscribe((r) => {
          console.warn(r)
        })
      }
    }
  }
  mypfunct() {
    console.log(
      'sp',
      (<HTMLInputElement>document.getElementById('sp')).checked
    );
    if ((<HTMLInputElement>document.getElementById('sp')).checked) {
      this.flag = false;
    }
  }

  mycfunct() {
    console.log(
      'sp',
      (<HTMLInputElement>document.getElementById('sc')).checked
    );
    if ((<HTMLInputElement>document.getElementById('sc')).checked) {
      this.flag = true;
    }
  }
  ngOnInit(): void { }


  //  registration = new FormGroup({
  //    first_name: new FormControl("" , [Validators.required]),
  //    last_name: new FormControl("", [Validators.required]),
  //    email: new FormControl("", [Validators.required]),
  //    password: new FormControl("", [Validators.required]),
  //    confirmpassword: new FormControl("", [Validators.required])
 
  //  });
  //  regi(data: any){
  //   if(this.Password.value == this.ConfirmPassword){
  //     console.log("submited");
  //     let CPWD = (<HTMLInputElement>document.getElementById('cpwd')).value;
  //   let SPWD = (<HTMLInputElement>document.getElementById('spwd')).value;
  //   if (CPWD == SPWD) {

  //     let id = (<HTMLInputElement>document.getElementById('sp')).checked;

  //     // this.flag = true;
  //     console.log(id);
  //     if (id == true) {
  //       console.log(data);
  //       this.userData.createparent(data).subscribe((result) => {
  //         console.warn(result);
  //       });
  //     } else {
  //       this.userData.createchild(data).subscribe((r) => {
  //         console.warn(r)
  //       })
  //     }
  //   }
      

  //   }else{
  //     this.confirmpassword='inline'
  //   }
  //  }
  //  get First_name(): FormControl{
  //   return this.registration.get("first_name") as FormControl;
  //  }
  //  get Last_name(): FormControl{
  //   return this.registration.get("last_name") as FormControl;
  //  }
  //  get Email(): FormControl{
  //   return this.registration.get("email") as FormControl;
  //  }
  //  get Password(): FormControl{
  //   return this.registration.get("password") as FormControl;
  //  }
   
  //  get ConfirmPassword(): FormControl{
  //   return this.registration.get("confirmpassword") as FormControl;
  //  }
}
