import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { IncidentService } from '../../../services/incident.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Incident } from '../../../interfaces/incident';

@Component({
  selector: 'app-incidents-table',
  imports: [MatTableModule, MatPaginatorModule, MatCheckboxModule, FormsModule],
  providers: [IncidentService],
  templateUrl: './incidents-table.component.html',
  styleUrl: './incidents-table.component.scss'
})

export class IncidentsTableComponent implements AfterViewInit { 
  incidentService = inject(IncidentService);
  displayedColumns: string[] = ['incident_id', 'atacker_id', 'name', 'log_id', 'response_id', 'risk_name', 'solved'];
  dataSource = new MatTableDataSource<Incident>();


  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngAfterViewInit() {
    //this.dataSource.loadIncidents();
    /*this.incidentService.getIncidents().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });*/

    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
  }

}

const data: Incident[] = [
  {
    incident_id: 'INC001',
    atacker_id: 'ATK001',
    name: 'Unauthorized Access Attempt',
    log_id: 'LOG001',
    response_id: 'RESP001',
    risk_name: 'High',
    solved: false,
  },
  {
    incident_id: 'INC002',
    atacker_id: 'ATK002',
    name: 'Phishing Email Detected',
    log_id: 'LOG002',
    response_id: 'RESP002',
    risk_name: 'Medium',
    solved: true,
  },
  {
    incident_id: 'INC003',
    atacker_id: 'ATK003',
    name: 'Data Breach Detected',
    log_id: 'LOG003',
    response_id: 'RESP003',
    risk_name: 'Critical',
    solved: false,
  },
  {
    incident_id: 'INC004',
    atacker_id: 'ATK004',
    name: 'Malware Installation',
    log_id: 'LOG004',
    response_id: 'RESP004',
    risk_name: 'High',
    solved: true,
  },
  {
    incident_id: 'INC005',
    atacker_id: 'ATK005',
    name: 'Denial of Service (DoS)',
    log_id: 'LOG005',
    response_id: 'RESP005',
    risk_name: 'Critical',
    solved: false,
  },
];

