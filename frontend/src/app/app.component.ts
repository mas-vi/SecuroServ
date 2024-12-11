import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from './components/pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatSlideToggleModule, HeaderComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
