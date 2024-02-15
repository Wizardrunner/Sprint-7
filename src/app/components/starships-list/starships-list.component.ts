// starship-list.component.ts
import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Starship, StarshipService } from '../../services/starships.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component'; // Asegúrate de que la ruta de importación sea correcta

@Component({
  selector: 'app-starship-list',
  template: `
    <div *ngIf="!selectedStarship" class="starships-container">
      <div *ngFor="let starship of starships$ | async" class="starship-item" (click)="showStarshipDetails(starship)">
        <p>{{ starship.name | uppercase }}</p><p>{{ starship.model }}</p>
      </div>
      <div class="load-more-container" *ngIf="!selectedStarship">
        <button (click)="loadMore()" class="load-more-button">Load More</button>
      </div>
    </div>
    <app-starship-details *ngIf="selectedStarship" [starship]="selectedStarship" (close)="clearSelection()"></app-starship-details>
  `,
  standalone: true,
  imports: [CommonModule, StarshipDetailsComponent],
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  starships$: Observable<any[]> = of([]);
  selectedStarship: Starship | null = null;
  private page = 1; 

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    this.loadStarships();
  }

  loadStarships() {
    this.starships$ = this.starshipService.getStarships(1).pipe(
      map(response => response.results)
    );
  }

  loadMore() {
    this.page++; // Incrementa el número de página
    this.starshipService.getStarships(this.page).pipe(
      map(response => response.results)
    ).subscribe(newStarships => {
      this.starships$ = this.starships$.pipe(
        map(existingStarships => [...existingStarships, ...newStarships])
      );
    });
  }
  
  showStarshipDetails(starship: any) {
    this.selectedStarship = starship;
  }

  clearSelection() {
    this.selectedStarship = null; // Añadir un método para limpiar la selección
  }
}
