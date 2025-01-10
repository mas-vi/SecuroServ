import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../partials/footer/footer.component';
import { HeaderComponent } from '../../partials/header/header.component';
import { RouterModule } from '@angular/router';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
