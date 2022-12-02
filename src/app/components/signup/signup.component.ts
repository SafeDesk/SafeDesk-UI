import { Component, OnInit } from '@angular/core';
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
      id: 'p',
      v: 'parent',
    },
    {
      name: 'Child',
      id: 'c',
      v: 'child',
    },
  ];

  constructor(private userData: LoginService) {}
  getUserFormData(data: any) {
    let id = (<HTMLInputElement>document.getElementById('sp')).checked;
    // this.flag = true;
    console.log(id);
    if (id == true) {
      console.log(data);
      this.userData.createparent(data).subscribe((result) => {
        console.warn(result);
      });
    } else {
      // this.userData.createchild(data).subscribe((r)=>{
      // console.warn(r)
      // })
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
  ngOnInit(): void {}
}
