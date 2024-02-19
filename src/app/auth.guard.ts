// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }

    // Aquí, verifica si el usuario intentaba acceder a '/starships'
    if (state.url.includes('/starships')) {
      this.router.navigate(['/login'], { queryParams: { accessDenied: 'starships' } });
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
    return false;
  }
}
