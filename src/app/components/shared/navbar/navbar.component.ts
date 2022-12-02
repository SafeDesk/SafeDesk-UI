import { Component, Inject, OnInit } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router,
    // public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}


  ngOnInit(): void {
  }

  // loginWithRedirect() {
  //   this.auth.loginWithRedirect();
  // }
  
  // logout(){
  //   this.auth.logout({returnTo : this.doc.location.origin})
  // }

}
