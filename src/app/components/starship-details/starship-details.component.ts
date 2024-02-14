// starship-details.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship } from '../../services/starships.service'; 

@Component({
  selector: 'app-starship-details',
  template: `
    <div *ngIf="starship">
    <img *ngIf="starship.id" [src]="getImageUrl(starship.id)" [alt]="starship.name" (error)="onImageError($event)">
      <h3>Detalles de la Nave: {{ starship.name }}</h3>
      <p>Modelo: {{ starship.model }}</p>
      <p>Fecha de creación: {{ starship.created }}</p>
      <p>Fecha de modificación: {{ starship.edited }}</p>
      <p>Fabricante: {{ starship.manufacturer }}</p>
      <p>Coste en créditos: {{ starship.cost_in_credits }}</p>
      <p>Megaluces por hora: {{ starship.MGLT }}</p>
      <p>Calificación de hiperimpulsor: {{ starship.hyperdrive_rating }}</p>
      <p>Velocidad máxima en atmósfera: {{ starship.max_atmosphering_speed }}</p>
      <p>Longitud: {{ starship.length }} metros</p>
      <p>Capacidad de carga: {{ starship.cargo_capacity }}</p>
      <p>Consumibles: {{ starship.consumables }}</p>
      <p>Tripulación: {{ starship.crew }}</p>
      <p>Pasajeros: {{ starship.passengers }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class StarshipDetailsComponent {
  @Input() starship?: Starship;

  getImageUrl(id: string): string {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }
  onImageError(event: any) {
    event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
  
  
}
