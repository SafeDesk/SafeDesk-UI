import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
// import { MatButton } from '@angular/material/button';
import {TaskItemDescriptionComponent} from '../task-item-description/task-item-description.component'
import { MessengerService } from 'src/app/services/messenger.service';
import axios from 'axios';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskitem :any = {} 
  token!: string;
  ngOnInit(): void {
    this.token = this.msg.getToken();
     var progressList = JSON.parse(localStorage.getItem("progressList") || "[]");
    console.log(this.taskitem);
    this.isChecked = this.taskitem.status;

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
  async markCompleted(){
    // console.log(this.taskitem);
    this.isChecked = true;
    this.handleAddToProgress();
    this.postmarkCompleted();
  }

  async postmarkCompleted(){
    console.log(this.taskitem);
    let postData = {
      "task_id": this.taskitem.id, 
      "task_type": this.taskitem.category 
    };
    await axios.post(
      'https://safedesk.herokuapp.com/api/v1/rewards/markcompleted',
      postData,
      { headers: { Authorization: `Bearer ${this.token}` } }
    );

  }
  

  handleAddToProgress(){
    this.msg.sendMsg(this.taskitem);
  }

  
}

