import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../partials/footer/footer.component';
import { HeaderComponent } from '../../partials/header/header.component';
import { PartenerSliderComponent } from '../../partials/partener-slider/partener-slider.component';
import { RouterModule } from '@angular/router';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, PartenerSliderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
