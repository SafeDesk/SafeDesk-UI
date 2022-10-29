import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(FormComponent, {
      width: '40%',
    });
  }
}
