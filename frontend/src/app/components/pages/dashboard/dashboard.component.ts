import { Component } from '@angular/core';
import { TableComponent } from '../../partials/table/table.component';
import { HeaderComponent } from '../../partials/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, HeaderComponent, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  status1: boolean = true;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;

  toggleStatus1() {
    this.status1 = !this.status1;
    this.status2 = false;
    this.status3 = false;
    this.status4 = false;
  }

  toggleStatus2() {
    this.status2 = !this.status2;
    this.status1 = false;
    this.status3 = false;
    this.status4 = false;
  }

  toggleStatus3() {
    this.status3 = !this.status3;
    this.status2 = false;
    this.status1 = false;
    this.status4 = false;
  }

  toggleStatus4() {
    this.status4 = !this.status4;
    this.status2 = false;
    this.status3 = false;
    this.status1 = false;
  }

}
