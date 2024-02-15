// starship-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship } from '../../services/starships.service'; 

@Component({
  selector: 'app-starship-details',
  styleUrls: ['./starship-details.component.scss'],
template: `
<div class="starship-details-container" *ngIf="starship">
  <div class="image-container">
    <img *ngIf="starship.id" [src]="getImageUrl(starship.id)" [alt]="starship.name" (error)="onImageError($event)">
  </div>
  <div class="data-container">
    <button (click)="close.emit()" class="close-button">X</button>
    <h3>{{ starship.name }}</h3>
      <h4>{{ starship.model }}</h4>
      <p>Creation date: {{ starship.created }}</p>
      <p>Modification date: {{ starship.edited }}</p>
      <p>Manufacturer: {{ starship.manufacturer }}</p>
      <p>Cost in credits: {{ starship.cost_in_credits }}</p>
      <p>Megalights per hour: {{ starship.MGLT }}</p>
      <p>Hyperdrive Rating: {{ starship.hyperdrive_rating }}</p>
      <p>Maximum speed in atmosphere: {{ starship.max_atmosphering_speed }}</p>
      <p>Length: {{ starship.length }} meters</p>
      <p>Load capacity: {{ starship.cargo_capacity }}</p>
      <p>Consumables: {{ starship.consumables }}</p>
      <p>Crew: {{ starship.crew }}</p>
      <p>Passengers: {{ starship.passengers }}</p>
    </div>
  </div>
`,
  standalone: true,
  imports: [CommonModule]
})
export class StarshipDetailsComponent {
  @Input() starship?: Starship;
  @Output() close = new EventEmitter<void>();

  getImageUrl(id: string): string {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }

  onImageError(event: any) {
    event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
