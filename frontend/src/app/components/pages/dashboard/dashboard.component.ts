import { Component } from '@angular/core';
import { TableComponent } from '../../partials/table/table.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
