import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  data = [];
  constructor(private msg: MessengerService) {}
  token: string = '';
  ngOnInit(): void {
    this.token = this.msg.getToken();

    this.getdata();
  }
  getdata = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/chores/',
        { headers: { Authorization: `Bearer ${this.token}` } }
      );
      this.data = data;
      console.log('here data',this.data);
    } catch (e) {
      console.log(e);
    }
    this.getMathsData();
  };

  getMathsData = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/homework/',
        { headers: { Authorization: `Bearer ${this.token}` } }
      );
      this.data = this.data.concat(data);
      // console.log('inside mathhw',this.data);

      console.log(typeof this.data);
    } catch (e) {
      console.log(e);
    }
    this.getVolData()
  };
  getVolData = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/volunteer/',
        { headers: { Authorization: `Bearer ${this.token}` } }
      );
      this.data = this.data.concat(data);
      // console.log('inside mathhw',this.data);

      console.log(typeof this.data);
    } catch (e) {
      console.log(e);
    }
  };
}
function type(data: never[]): any {
  throw new Error('Function not implemented.');
}
