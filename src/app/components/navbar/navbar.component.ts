// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar-container">
      <div class="social-icons">
        <!-- Iconos de redes sociales aquí -->
        <a href="https://facebook.com" target="_blank">FB</a>
        <a href="https://twitter.com" target="_blank">TW</a>
        <a href="https://instagram.com" target="_blank">IG</a>
      </div>
      <div class="logo-container">
        <!-- Logo de Star Wars aquí. Asegúrate de ajustar la ruta de la imagen según tu estructura de proyecto -->
        <img src="../../../assets/logo_starwars.png" alt="Star Wars Logo">
      </div>
      <div class="login-link">
        <!-- Enlace para hacer login -->
        <a href="/login">Login</a>
      </div>
    </div>
    <nav>
      <a routerLink="/" class="nav-link">Home</a>
      <a routerLink="/starships" class="nav-link">Starships</a>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'], // Asegúrate de que el archivo de estilos exista y esté correctamente referenciado
  standalone: true,
  imports: [RouterModule]
})
export class NavbarComponent {}
