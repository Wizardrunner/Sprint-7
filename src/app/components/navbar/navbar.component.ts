// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <div class="logo">Logo de Star Wars aquí</div>
      <div class="nav-links">
        <a routerLink="/" class="nav-link">Home</a>
        <a routerLink="/starships" class="nav-link">Starships</a>
      </div>
      <div class="social-login">
        <!-- Iconos de redes sociales y botón de login aquí -->
      </div>
    </div>
  `,
  styleUrls: ['./navbar.component.scss'], // Asegúrate de tener estilos aquí
  standalone: true,
  imports: [RouterModule]
})
export class NavbarComponent {}
