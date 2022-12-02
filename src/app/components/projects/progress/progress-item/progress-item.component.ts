import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-item',
  templateUrl: './progress-item.component.html',
  styleUrls: ['./progress-item.component.css']
})


export class ProgressItemComponent implements OnInit {
  @Input() progressItem: any;
  constructor() { }

  ngOnInit(): void {
  }

 
}
