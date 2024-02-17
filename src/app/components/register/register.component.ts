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
  name: string = ''; // Añade la propiedad para el nombre
  surname: string = ''; // Añade la propiedad para el apellido
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    // Actualiza la llamada a register para incluir nombre y apellido
    this.authService.register({ name: this.name, surname: this.surname, email: this.email, password: this.password }).subscribe({
      next: (user) => {
        // Maneja el éxito del registro, por ejemplo, haciendo login automático
        console.log('Registro exitoso', user);
        // Considera manejar aquí la redirección o la confirmación visual del registro exitoso
        this.authService.login(this.email, this.password).subscribe(); // Opcional: Login automático
      },
      error: (error) => {
        console.error('Error en el registro', error);
      }
    });
  }
}
