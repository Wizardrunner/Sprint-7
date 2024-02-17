// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule] // Importa FormsModule aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inyecta el Router aquí

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Login exitoso', user);
        this.router.navigate(['/starships']); // Redirige a la ruta de naves
      },
      error: (error) => {
        console.error('Error en login', error);
      }
    });
  }
}
