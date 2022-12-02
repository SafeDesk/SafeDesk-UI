import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
// import { MatButton } from '@angular/material/button';
import {TaskItemDescriptionComponent} from '../task-item-description/task-item-description.component'
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskitem :any = {} 
  ngOnInit(): void {
     var progressList = JSON.parse(localStorage.getItem("progressList") || "[]");
     console.log('ti item',this.taskitem)
     progressList.forEach((item)=>{
      if (item.taskName === this.taskitem.task_name){
        console.log(item.taskName, this.taskitem.task_name, );
        // this.markCompleted();
        this.isChecked = true;
      }
     })
    // console.log(today)
  }
  today: number = Date.now();
  isChecked = false;
  constructor(public dialog: MatDialog, private msg : MessengerService) {}

  openDialog() {
    const dialogRef = this.dialog.open(TaskItemDescriptionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  markCompleted(){
    this.isChecked = true;
    this.handleAddToProgress()
  }

  handleAddToProgress(){
    this.msg.sendMsg(this.taskitem);
  }

  
}

