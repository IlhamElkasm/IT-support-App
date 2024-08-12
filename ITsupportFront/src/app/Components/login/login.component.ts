import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from 'src/app/Module/Jwt';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  role: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
        (response) => {
            localStorage.setItem('jwt', response.token);
            localStorage.setItem('role', response.role);  // Store role
            
            if (response.role === 'ADMIN') {
                this.router.navigate(['/dashboard']);
            } else if (response.role === 'USER') {
                this.router.navigate(['/dashboardUser']);
            } else if (response.role === 'TECHNICIEN') {
                this.router.navigate(['/technicien']);
            } else {
                alert('Rôle non reconnu');
            }
        },
        (error) => {
            alert('Échec de l\'authentification');
        }
    );
}

}