import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
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
    // const { data } = await axios.get("https://safedesk.herokuapp.com/api/v1/chores");
    // console.log(data);
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
      await axios.post(
        'https://safedesk.herokuapp.com/api/v1/chores/',
        postData
      );
      this.form.reset();
    }
  }
  // const { data } = await axios.get("https://safedesk.herokuapp.com/api/v1/chores");
  // console.log(data);
}
