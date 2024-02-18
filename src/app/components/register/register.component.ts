import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule

// Validador personalizado para nombre y apellido
function nombreApellidoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valido = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+([a-zA-ZÀ-ÿ\u00f1\u00d1]{2,})$/g.test(control.value);
    return valido ? null : { 'nombreApellidoInvalido': true };
  };
}

// Validador personalizado para password
function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valido = /^(?!.*\s).{6,}$/g.test(control.value);
    return valido ? null : { 'passwordInvalido': true };
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] 
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), nombreApellidoValidator()]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3), nombreApellidoValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.registerForm.valid) {
      const { name, surname, email, password } = this.registerForm.value;
      this.authService.register({ 
        name: name as string, 
        surname: surname as string, 
        email: email as string, 
        password: password as string 
      }).subscribe({
        next: () => {
          this.authService.login(email as string, password as string).subscribe({
            next: () => {
              this.router.navigate(['/starships']);
            },
            error: error => console.error('Error en el inicio de sesión automático', error)
          });
        },
        error: error => console.error('Error en el registro', error)
      });
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']); // Navega a la ruta de login
  }

}
