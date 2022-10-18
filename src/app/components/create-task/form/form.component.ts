import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  public saveItem(): void {
    this.listData.push(this.form.value);
    this.form.reset();
  }
}
