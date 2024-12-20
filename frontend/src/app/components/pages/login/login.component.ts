import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [RouterModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private renderer: Renderer2) {}
    addClass() : void {
      this.renderer.addClass(document.querySelector('.container'), 'active');
    }

    removeClass() : void {
      this.renderer.removeClass(document.querySelector('.container'), 'active');
    }

}
