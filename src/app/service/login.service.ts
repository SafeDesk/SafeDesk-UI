import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

import { Subject } from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

url="https://safedesk.herokuapp.com/";
  constructor(private myhttp:HttpClient) {

   }
  async loginUser(loginInfo:any) {
    console.log('login user', loginInfo)
    // this.myhttp.post(this.url+'api/v1/parent/login',
 const {data} = await axios.post(this.url+'api/v1/parent/login', loginInfo) 
    // loginInfo );
    // console.log(resp);
    // console.log()
    return data ;
  }
  //child api

  async childlogin(childlogin:any){
    //console.log('child log', childlogin)
    const {data}= await axios.post(this.url+'api/v1/child/login', childlogin)
    return data;
  }
  //create parent
  createparent(pdata: any){
    return this.myhttp.post(this.url + 'api/v1/parent/signup',pdata);
  }
  //create child
  createchild(cdata : any){
    return this.myhttp.post(this.url + 'api/v1/child/signup',cdata);
  }
  isloggedin():boolean{
    // console.log('auth token' + token);
         return localStorage.getItem("tokan_id")?true:false;
      }
}

