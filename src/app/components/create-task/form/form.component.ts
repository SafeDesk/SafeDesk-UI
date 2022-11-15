import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import axios from 'axios';
import Swal from 'sweetalert2';
import { CreateTaskComponent } from '../create-task.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  minDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private task: CreateTaskComponent,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    const currentDay = new Date();
    this.minDate = currentDay;
  }

  form!: FormGroup;
  actionBtn: string = 'Save';
  listData: any;
  ngOnInit(): void {
    this.listData = [];
    this.form = this.formBuilder.group({
      taskName: ['', Validators.required],
      points: ['', Validators.required],
      taskPriority: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.form.controls['taskName'].setValue(this.editData.task_name);
      this.form.controls['points'].setValue(this.editData.points);
      this.form.controls['taskPriority'].setValue(
        this.editData.task_priority.toString()
      );
      this.form.controls['date'].setValue(this.editData.date_completed);
      this.form.controls['description'].setValue(this.editData.description);
    }
  }
  async addChore() {
    if (!this.editData) {
      let data = this.form.value;
      let date = data.date;
      date.setHours(23, 59, 0);
      let postData = {
        task_name: data.taskName,
        points: data.points,
        task_priority: data.taskPriority,
        description: data.description,
        date_completed: data.date.toISOString(),
        parent_id: '',
      };

      if (this.form.valid) {
        try {
          await axios.post(
            'https://safedesk.herokuapp.com/api/v1/chores/',
            postData
          );
          this.task.getdata();
          this.form.reset();
          Swal.fire('Chores added successfully').then(function () {
            window.location.reload();
          });
        } catch (err) {
          alert('Could not add chores');
        }
      }
    } else {
      let data = this.form.value;
      let putData = {
        task_name: data.taskName,
        points: data.points,
        task_priority: data.taskPriority,
        description: data.description,
        date_completed: data.date,
        parent_id: '',
      };
      await this.updateProduct(putData, this.editData.id);
    }
  }

  async updateProduct(data: any, id: any) {
    await axios.put(`https://safedesk.herokuapp.com/api/v1/chores/${id}`, data);
    Swal.fire('Chores updated successfully').then(function () {
      window.location.reload();
    });
  }
}
