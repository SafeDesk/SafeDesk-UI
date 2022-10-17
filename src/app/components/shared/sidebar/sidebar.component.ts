import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() sidebarstatus:boolean=false;

  list=[
    {
      number:'1',
      name:'All Chores',
      icon: 'fa-solid fa-house',
      rl:'dashboard'
    },
    {
      number:'2',
      name:'Chores',
      icon: 'fa-solid fa-circle-info',
      rl:'createChores'
    },
    {
      number:'3',
      name:'Create Chores',
      icon:'fa-solid fa-plus',
      rl:'cc'
    },
    {
      number:'4',
      name:'Homework',
      icon:'fa-solid fa-note-sticky',
      rl:'hw'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
