// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showAccessDeniedMessage = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Actualiza el mensaje basado en queryParams cada vez que cambian
      this.showAccessDeniedMessage = params['accessDenied'] === 'starships';
    });
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Login exitoso', user);
        // Redirige a '/starships' o a la página que se intentó acceder
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/starships';
        this.router.navigateByUrl(returnUrl);
      },
      error: (error) => {
        console.error('Error en login', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
