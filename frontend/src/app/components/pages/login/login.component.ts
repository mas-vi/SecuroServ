import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, MatIconModule, FormsModule, MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  authService=inject(AuthService);

  constructor(private renderer: Renderer2) {}

  loginObject : any = {
    "Username": "",
    "Password": ""
  }

  signUpObject : any = {
    "Username": "",
    "Password": "",
    "Firstname":"",
    "Lastname":"",
    "Email": "",
    "Company": ""
  }

  addClass() : void {
    this.renderer.addClass(document.querySelector('.container'), 'active');
  }

  removeClass() : void {
    this.renderer.removeClass(document.querySelector('.container'), 'active');
  }

  login(): void{
   this.authService.login(this.loginObject.Username,this.loginObject.Password);
   
  }
  
  register(): void{
    this.authService.register(
      this.signUpObject.Username,
      this.signUpObject.Password,
      this.signUpObject.Firstname,
      this.signUpObject.Lastname,
      this.signUpObject.Email,
      this.signUpObject.Company
    );
  }
}
