// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router'; // Importa Router
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Importa FormsModule aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inyecta el Router aquí

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Login exitoso', user);
        this.router.navigate(['/starships']); // Redirige a la ruta de naves
      },
      error: (error) => {
        console.error('Error en login', error);
        this.errorMessage = 'Login failed. Please check your credentials.'; // Establece el mensaje de error
      }
    });
  }
  navigateToRegister() {
    this.router.navigate(['/register']); // Navega a la ruta de registro
  }

}
