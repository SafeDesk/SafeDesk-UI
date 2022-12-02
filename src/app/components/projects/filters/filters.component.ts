import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  list = [
    {
      number: '1',
      name: 'Homework',
      icon: 'fa-solid fa-book-open',
      rl: 'homework',
    },
    {
      number: '2',
      name: 'Chores',
      icon: 'fa-solid fa-broom',
      rl: 'createChores',
    },
    
    {
      number: '4',
      name: 'Volunteer',
      icon: 'fa-solid fa-note-sticky',
      rl: 'volunteer',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
