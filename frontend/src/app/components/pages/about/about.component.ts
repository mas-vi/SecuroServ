import { Component } from '@angular/core';
import { FooterComponent } from "../../partials/footer/footer.component";
import { HeaderComponent } from "../../partials/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
