import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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
    private task: CreateTaskComponent
  ) {
    const currentDay = new Date(Date.now());
    this.minDate = currentDay;
  }

  form!: FormGroup;
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
  }
  async addChore() {
    let data = this.form.value;
    let postData = {
      task_name: data.taskName,
      points: data.points,
      task_priority: data.taskPriority,
      description: data.description,
      date_completed: data.date,
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
        alert('Could not add');
      }
    }
  }
}
