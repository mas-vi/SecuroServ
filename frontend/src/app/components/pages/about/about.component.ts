import { Component } from '@angular/core';
import { FooterComponent } from "../../partials/footer/footer.component";
import { HeaderComponent } from "../../partials/header/header.component";
import { RouterModule } from '@angular/router';
import { PartenerSliderComponent } from '../../partials/partener-slider/partener-slider.component';

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent, RouterModule, PartenerSliderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
