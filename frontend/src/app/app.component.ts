import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { PartenerSliderComponent } from './components/partials/partener-slider/partener-slider.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatSlideToggleModule, HeaderComponent, RouterOutlet, HomeComponent, FooterComponent, PartenerSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
