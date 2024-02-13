// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  
  template: `
<div class="navbar-wrapper">
  <div class="top-bar">
      <div class="social-links">
        <ul role="list">
          <!-- Agrega aquí los elementos de la lista de redes sociales -->
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
        <!-- Enlace para hacer login -->
        <a href="/login">Login</a>
</div>
    </div>
    <nav>
      <a routerLink="/" class="nav-link">Home</a>
      <a routerLink="/starships" class="nav-link">Starships</a>
    </nav>
</div>
  `,
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class NavbarComponent {}
