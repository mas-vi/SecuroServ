import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { IncidentService } from '../../../services/incident.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Incident } from '../../../interfaces/incident';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ResponseService } from '../../../services/response.service';
import { ResponseDialogComponent } from '../response-dialog/response-dialog.component';

@Component({
  selector: 'app-incidents-table',
  imports: [MatTableModule, MatPaginatorModule, MatCheckboxModule, FormsModule, NgIf, MatDialogModule],
  providers: [IncidentService],
  templateUrl: './incidents-table.component.html',
  styleUrl: './incidents-table.component.scss'
})

export class IncidentsTableComponent implements AfterViewInit { 
  dialog = inject(MatDialog);
  incidentService = inject(IncidentService);
  displayedColumns: string[] = ['incident_id', 'attacker_id', 'log_id', 'name', 'response_id', 'risk_name', 'solved'];
  dataSource = new MatTableDataSource<Incident>();
  responseService = inject(ResponseService);

  time: string;
  team: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngAfterViewInit() {
    this.incidentService.getIncidents().subscribe(data => {
      console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].solved = data.data[i].solved === 'true';
      }
      this.dataSource = new MatTableDataSource<Incident>(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  fetchResponse(id: string) {
    this.responseService.getResponse(id).subscribe(data => {
      console.log(data);
      this.time = data.data.response_time;
      this.team = data.data.security_team_id;
      this.openResponseDialog();
    });
  }

  openResponseDialog() : void {
    const dialogRef = this.dialog.open(ResponseDialogComponent, {
      data: {
        time: this.time,
        team: this.team,
      }
    });
  }

}

