// welcome.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome to the Star Wars Universe</h1>
    <a routerLink="/starships">Explore Starships</a>
  `,
  standalone: true
})
export class WelcomeComponent {}
