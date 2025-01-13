import { AfterViewChecked, AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { ThreatService } from '../../../services/threat.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Threat } from '../../../interfaces/threat';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-threats-table',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './threats-table.component.html',
  styleUrl: './threats-table.component.scss'
})
export class ThreatsTableComponent implements AfterViewInit{
  threatService = inject(ThreatService);
  displayedColumns: string[] = ['threat_id', 'threat_name', 'threat_type', 'attack_pattern_id', 'vulnerability_id'];
  dataSource = new MatTableDataSource<Threat>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.threatService.getThreats().subscribe(data => {
      console.log(data.data);
      this.dataSource = new MatTableDataSource<Threat>(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
