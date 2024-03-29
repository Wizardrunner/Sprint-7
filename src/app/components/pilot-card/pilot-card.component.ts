// pilot-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de la interfaz Pilot
interface Pilot {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pilot-card',
  templateUrl: './pilot-card.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PilotCardComponent {
  @Input() pilot!: Pilot; // Usando la interfaz Pilot

  getImageUrl(): string {
    // Extrae el ID del piloto de la URL y construye la URL de la imagen
    const id = this.extractIdFromSwapiUrl(this.pilot.url);
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  private extractIdFromSwapiUrl(swapiUrl: string): string {
    const match = swapiUrl.match(/\/([0-9]+)\/$/);
    return match ? match[1] : '';
  }
}
