import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarstatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'All Chores',
      icon: 'fa-solid fa-house',
      rl: 'dashboard',
    },
    {
      number: '2',
      name: 'Chores',
      icon: 'fa-solid fa-broom',
      rl: 'createChores',
    },
    {
      number: '3',
      name: 'Homework',
      icon: 'fa-solid fa-book-open',
      rl: 'homework',
    },
    {
      number: '4',
      name: 'Volunteer',
      icon: 'fa-solid fa-note-sticky',
      rl: 'volunteer',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
