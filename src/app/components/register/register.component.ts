// register.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  name: string = ''; 
  surname: string = ''; 
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router 
  ) {}

  register() {
    this.authService.register({ name: this.name, surname: this.surname, email: this.email, password: this.password }).subscribe({
      next: () => {
        // Después del registro exitoso, inicia sesión automáticamente
        this.authService.login(this.email, this.password).subscribe({
          next: () => {
            // Después del inicio de sesión exitoso, redirige a la página de naves
            this.router.navigate(['/starships']); // Asegúrate de que la ruta es correcta
          },
          error: (error) => {
            console.error('Error en el inicio de sesión automático', error);
          }
        });
      },
      error: (error) => {
        console.error('Error en el registro', error);
      }
    });
  }
}
