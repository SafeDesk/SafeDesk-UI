import { Component, OnInit } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-task-item-description',
  templateUrl: './task-item-description.component.html',
  styleUrls: ['./task-item-description.component.css']
})
export class TaskItemDescriptionComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    this.onClik();
  }
  color: ThemePalette = 'warn';
  isChecked = false;
  // isChecked = true;
  
  onClik(){
    console.log(this.isChecked);
  }

  markCompleted(){
    this.isChecked = true;
  }
}
