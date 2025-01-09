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
  displayedColumns: string[] = ['incident_id', 'attacker_id', 'log_id', 'name', 'response_id', 'risk_name', 'solved'];
  dataSource = new MatTableDataSource<Incident>();


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

}

