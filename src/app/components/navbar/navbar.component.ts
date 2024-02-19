// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según sea necesario
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  
  template: `
<div class="navbar-wrapper">
  <div class="top-bar">
      <div class="social-links">
        <ul role="list">
          <!-- Elementos de la lista de redes sociales -->
          <li class="other social-icon">
            <a class="link aw-independent" href="https://www.tiktok.com/@starwars" target="_blank" rel="noopener noreferrer">
              <img src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100" alt="TikTok" class="other-logo">
            </a>
          </li>
          <li class="instagram social-icon">
            <a class="link" href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
              <img src="../../../assets/logo_instagram.svg" alt="Instagram">
            </a>
          </li>
          <li class="twitter social-icon">
            <a class="link" href="https://twitter.com/starwars/" target="_blank" rel="noopener noreferrer">
              <img src="../../../assets/logo_twitter.svg" alt="Twitter">
            </a>
          </li>
          <li class="facebook social-icon">
            <a class="link" href="https://www.facebook.com/StarWars/" target="_blank" rel="noopener noreferrer">
              <img src="../../../assets/logo_facebook.svg" alt="Facebook">
            </a>
          </li>
          <li class="youtube social-icon">
            <a class="link" href="https://www.youtube.com/user/starwars/" target="_blank" rel="noopener noreferrer">
              <img src="../../../assets/logo_youtube.svg" alt="Youtube">
            </a>
          </li>
          <li class="other social-icon separator-before">
            <a class="link aw-independent" href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="Star Wars Kids" class="other-logo">
            </a>
          </li>
        </ul>
      </div>
    <div class="logo-container">
        <img src="../../../assets/logo_starwars.png" alt="Star Wars Logo">
    </div>
    <div class="login-link">
  <!-- Muestra el enlace de Login/Registro si el usuario no está logueado -->
  <a *ngIf="!isLoggedIn" routerLink="/login">Login</a>
  <a *ngIf="!isLoggedIn" routerLink="/register">Sign Up</a>
  
  <!-- Muestra el enlace de Logout si el usuario está logueado -->
  <a *ngIf="isLoggedIn" (click)="logout()" class="logout-link">Logout</a>
</div>
    </div>
    <div class="tabs-container">
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
      <a routerLink="/starships" routerLinkActive="active" (click)="navigateToStarships($event)" class="nav-link">Starships</a>
    </nav>
  </div>
</div>
  `,
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {
  // Agrega una propiedad para el estado de autenticación
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  navigateToStarships(event: MouseEvent) {
    // Previene la navegación predeterminada solo si es necesario
    const currentRoute = this.router.url;
    
    if (currentRoute === '/starships' || currentRoute.includes('/starships/')) {
      event.preventDefault(); // Prevenir la navegación estándar del routerLink si ya estás en 'starships'
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/starships']);
      });
    }
  }
  
  logout() {
    this.authService.logout();
  }
}
