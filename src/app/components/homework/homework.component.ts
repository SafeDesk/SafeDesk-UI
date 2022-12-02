import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeFormComponent } from './home-form/home-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import axios from 'axios';
import Swal from 'sweetalert2';
import { MessengerService } from 'src/app/services/messenger.service';

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
  token: String = '';
  is_parent!: any;
  constructor(private dialog: MatDialog, private msg: MessengerService) {}
  ngOnInit(): void {
    this.token = this.msg.getToken();
    this.is_parent = this.msg.isParent();
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
        'https://safedesk.herokuapp.com/api/v1/homework/',
        { headers: { Authorization: `Bearer ${this.token}` } }
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `https://safedesk.herokuapp.com/api/v1/homework/${rid}`,
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        );
        window.location.reload();
      }
    });
  }
}
