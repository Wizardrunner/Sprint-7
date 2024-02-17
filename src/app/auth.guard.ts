// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'; // Asegúrate de ajustar la ruta de importación según tu estructura de carpetas

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // Si currentUser tiene valor, el usuario está logueado, permitir acceso
      return true;
    }

    // No logueado, redirigir a la página de login con la URL que intentaban acceder
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
