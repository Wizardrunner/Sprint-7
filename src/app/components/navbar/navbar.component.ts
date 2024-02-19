// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según sea necesario
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
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
