// starship-list.component.ts
import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starships.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component'; // Asegúrate de que la ruta de importación sea correcta


@Component({
  selector: 'app-starship-list',
  template: `
    <div *ngFor="let starship of starships$ | async" class="starship-item" (click)="showStarshipDetails(starship)">
      <p>{{ starship.name }} - {{ starship.model }}</p>
    </div>
    <button (click)="loadMore()">Load More</button>
    <app-starship-details [starship]="selectedStarship"></app-starship-details>
  `,
  standalone: true,
  imports: [CommonModule, StarshipDetailsComponent],
  styleUrls: ['./starships-list.component.scss'] 
})
export class StarshipListComponent implements OnInit {
  starships$: Observable<any[]> = of([]);
  selectedStarship: any = null;

  private page = 1;

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    this.loadStarships();
  }

  loadStarships() {
    this.starships$ = this.starshipService.getStarships(this.page).pipe(
      map(response => response.results)
    );
  }
    
  loadMore() {
    this.page++;
    this.loadStarships();
  }

  showStarshipDetails(starship: any) {
    console.log('Starship clicked:', starship);
    this.selectedStarship = starship;
  }
  }
