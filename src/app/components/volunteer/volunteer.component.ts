import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VolFormComponent } from './vol-form/vol-form.component';
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
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  displayedColumns: string[] = [
    'task_name',
    'points',
    'date_completed',
    'description',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<any>;
  token: string = '';
  is_parent!: any;
  constructor(private dialog: MatDialog, private msg: MessengerService) {}
  ngOnInit(): void {
    this.token = this.msg.getToken();
    this.is_parent = this.msg.isParent();
    this.getdata();
  }

  openDialog() {
    this.dialog.open(VolFormComponent, {
      width: '40%',
    });
  }

  getdata = async () => {
    try {
      const { data } = await axios.get(
        'https://safedesk.herokuapp.com/api/v1/volunteer/',
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (e) {
      console.log(e);
    }
  };

  editChore(row: any) {
    this.dialog.open(VolFormComponent, {
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
  async deleteChore(rid: any) {
    Swal.fire({
      title: 'Confirm deletion?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `https://safedesk.herokuapp.com/api/v1/volunteer/${rid}`,
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        );
        window.location.reload();
      }
    });
  }
}
