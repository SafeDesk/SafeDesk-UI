import { Component, OnInit } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  profileJson: string = "";
  constructor() { }

  ngOnInit(): void {
    // this.auth.user$.subscribe(
    //   (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    // )
  }

}
