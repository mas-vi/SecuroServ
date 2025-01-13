import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { InvestigationService } from '../../../services/investigation.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Investigation } from '../../../interfaces/investigation';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-investigations-table',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './investigations-table.component.html',
  styleUrl: './investigations-table.component.scss'
})
export class InvestigationsTableComponent implements AfterViewInit{
  investigationsService = inject(InvestigationService);
  displayedColumns: string[] = ['investigation_id', 'investigation_name', 'solution_id', 'impact_id', 'security_team_id', 'vulnerability_name'];
  dataSource = new MatTableDataSource<Investigation>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.investigationsService.getInvestigations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Investigation>(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
