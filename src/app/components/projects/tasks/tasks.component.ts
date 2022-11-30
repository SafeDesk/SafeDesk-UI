import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit(): void {
    this.getdata();

  }
  getdata = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/chores/'
      );
      this.data = data;
      console.log(typeof(this.data))
    } catch (e) {
      console.log(e);
    }
    this.getMathsData();
  };

  
  getMathsData = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/homework/'
      );
      this.data = this.data.concat(data);
      // console.log('inside mathhw',this.data);
    } catch (e) {
      console.log(e);
    }

  };
}
function type(data: never[]): any {
  throw new Error('Function not implemented.');
}

