import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  list = [{
    name : 'Parent',
    id :'p',
    v : 'parent'
  },
  {
    name : 'Child',
    id : 'c',
    v : 'child'
  }
]

  constructor(private userData:LoginService) {
   }
  getUserFormData(data:any){
    let id =(<HTMLInputElement>document.getElementById('p')).checked
    console.log(id);
     if(id == true){
       console.log(data)
       this.userData.createparent(data).subscribe((result)=>{
       console.warn(result)
      })
     }else{
      // this.userData.createchild(data).subscribe((r)=>{
      // console.warn(r)

      // })
     }
  }
  ngOnInit(): void {
  }

}
