import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
// import { MatButton } from '@angular/material/button';
import {TaskItemDescriptionComponent} from '../task-item-description/task-item-description.component'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  ngOnInit(): void {
     
    // console.log(today)
  }
  today: number = Date.now();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TaskItemDescriptionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

