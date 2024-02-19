// login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showAccessDeniedMessage = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Comprueba los queryParams para ver si se denegó el acceso a '/starships'
    this.route.queryParams.subscribe(params => {
      if (params['accessDenied'] === 'starships') {
        this.showAccessDeniedMessage = true;
      }
    });
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        // Lógica de redirección exitosa
      },
      error: (error) => {
        // Manejo de error de login
      },
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
