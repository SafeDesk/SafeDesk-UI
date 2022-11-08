import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  displayedColumns: string[] = [
    'task_name',
    'points',
    'task_priority',
    'date_completed',
    'description',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getdata();
  }

  openDialog() {
    this.dialog.open(FormComponent, {
      width: '40%',
    });
  }

  getdata = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/chores/'
      );
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (e) {
      console.log(e);
    }
  };

  editChore(row : any) {
    this.dialog.open(FormComponent, {
      width: '40%',
      data:row
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
