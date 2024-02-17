import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ email: this.email, password: this.password }).subscribe({
      next: (user) => {
        // Maneja el éxito del registro, por ejemplo, haciendo login automático
        console.log('Registro exitoso', user);
        this.authService.login(this.email, this.password).subscribe(); // Login automático
      },
      error: (error) => {
        console.error('Error en el registro', error);
      }
    });
  }
}
