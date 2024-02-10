// starship-details.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-starship-details',
  template: `
    <div *ngIf="starship">
      <h3>Detalles de la Nave: {{ starship.name }}</h3>
      <p>Modelo: {{ starship.model }}</p>
      <p>Fabricante: {{ starship.manufacturer }}</p>
      <p>Costo en créditos: {{ starship.cost_in_credits }}</p>
      <p>Longitud: {{ starship.length }} metros</p>
      <!-- Agrega más detalles según sea necesario -->
    </div>
  `,
  standalone: true,
  imports: [CommonModule] // Asegúrate de incluir CommonModule aquí
})
export class StarshipDetailsComponent {
  @Input() starship: any;
}
