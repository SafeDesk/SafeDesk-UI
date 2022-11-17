import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeFormComponent } from './home-form/home-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import axios from 'axios';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  displayedColumns: string[] = [
    'task_name',
    'points',
    'task_priority',
    'date_completed',
    'description',
    'action',
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
    this.dialog.open(HomeFormComponent, {
      width: '40%',
    });
  }

  getdata = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/homework/'
      );
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (e) {
      console.log(e);
    }
  };

  editHomework(row: any) {
    this.dialog.open(HomeFormComponent, {
      width: '40%',
      data: row,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async deleteHomework(rid: any) {
    Swal.fire({
      title: 'Confirm deletion?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Chore deleted successfully').then(function () {
          axios.delete(`https://safedesk.herokuapp.com/api/v1/homework/${rid}`);
          window.location.reload();
        });
      }
    });
  }
}
