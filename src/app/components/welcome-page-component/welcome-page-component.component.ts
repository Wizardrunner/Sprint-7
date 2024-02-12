// welcome-page.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page-component.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class WelcomePageComponent {}
