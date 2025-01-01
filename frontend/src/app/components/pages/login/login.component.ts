import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, MatIconModule, FormsModule, MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);

  constructor(private renderer: Renderer2) {}

  loginObject : any = {
    "Username": "",
    "Password": ""
  }

  signUpObject : any = {
    "Username": "",
    "Password": "",
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
    console.log(this.loginObject);
    if(this.loginObject.Username == "123" && this.loginObject.Password == "123"){
      alert("Login Successful");
      this.authService.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }
    else
      alert("Login Failed");
  }
  
  register(): void{
    this.router.navigate(['/']);
    alert("Registeration Successful");
  }
}
