// starships-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { Starship, StarshipService } from '../../services/starships.service';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';

@Component({
  selector: 'app-starship-list',
templateUrl: './starships-list.component.html',
  standalone: true,
  imports: [CommonModule, StarshipDetailsComponent],
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  starships$: Observable<Starship[]> = of([]);
  selectedStarship: Starship | null = null;
  private page = 1;
  private isLoading = false;
  private allLoaded = false;

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    this.loadStarships(true);
  }

  loadStarships(checkForMore: boolean = false) {
    if (!this.isLoading && !this.allLoaded) {
      this.isLoading = true;
      this.starshipService.getStarships(this.page).pipe(
        map(response => response.results),
        switchMap(newStarships => this.starships$.pipe(
          map(existingStarships => [...existingStarships, ...newStarships])
        )),
        finalize(() => this.isLoading = false),
        tap(() => {
          if (checkForMore) {
            setTimeout(() => this.checkIfNeedMore(), 100); // Espera a que el DOM se actualice
          }
        })
      ).subscribe(starships => this.starships$ = of(starships));
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window !== 'undefined') {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200 && !this.isLoading && !this.allLoaded) {
        this.page++;
        this.loadStarships();
      }
    }
  }
  
  private checkIfNeedMore() {
    if (typeof window !== 'undefined') {
      if ((window.innerHeight >= document.body.offsetHeight) && !this.allLoaded) {
        this.page++;
        this.loadStarships(true);
      }
    }
  }
  
  showStarshipDetails(starship: Starship) {
    this.selectedStarship = starship;
  }

  clearSelection() {
    this.selectedStarship = null;
  }
}
