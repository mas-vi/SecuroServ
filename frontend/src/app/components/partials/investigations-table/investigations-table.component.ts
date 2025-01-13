import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { InvestigationService } from '../../../services/investigation.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Investigation } from '../../../interfaces/investigation';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SolutionService } from '../../../services/solution.service';
import { MatDialog } from '@angular/material/dialog';
import { SolutionDialogComponent } from '../solution-dialog/solution-dialog.component';

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
  solutionService = inject(SolutionService);
  solution_name: string;
  solution_steps: string;
  dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.investigationsService.getInvestigations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Investigation>(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  fetchSolution(id: string) {
    this.solutionService.getSolution(id).subscribe(data => {
      this.solution_name = data.data.solution_name;
      this.solution_steps = data.data.solution_steps;
      this.openSolutionDialog();
    });
  }

  openSolutionDialog() {
    this.dialog.open(SolutionDialogComponent, {
      data: {
        solution_name: this.solution_name,
        solution_steps: this.solution_steps
      }
    });
  }


}
