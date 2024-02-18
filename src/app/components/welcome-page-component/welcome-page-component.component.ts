import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; // Importa RouterModule


@Component({
  selector: 'app-welcome',
  template: `
        <h1 class="welcome-title">Welcome to the Star Wars Universe</h1>
    <div class="welcome-container text-light">
      <ngb-carousel *ngIf="images">
        <ng-template ngbSlide *ngFor="let img of images; let i = index">
          <div class="picsum-img-wrapper" style="position: relative; width: 100%; height: 100%;">
            <img [src]="img.src" alt="Slide image" style="width: 100%; height: auto;">
            <div class="carousel-caption" [ngClass]="{'special-bg': img.specialBackground}" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); text-align: center; width: auto;">
            <h5 [style.color]="img.textColor" style="margin: 0;" [innerHTML]="img.title"></h5>
              <p [style.color]="img.textColor" style="margin: 0;">{{ img.description }}</p>
            </div>
          </div>
        </ng-template>
      </ngb-carousel>
      <button routerLink="/starships" class="custom-button">Explore Starships</button>
    </div>
  `,
  styleUrls: ['./welcome-page-component.component.scss'],
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule]
})
export class WelcomeComponent {
  images = [
    {
      src: '../../../assets/carrusel/phantom-menace-ferguson-onesheet-final-empirestrap_arti_e95a79c8.jpeg',
      title: 'STAR WARS: THE PHANTOM MENACE CELEBRATES <br> 25 YEARS WITH RETURN TO THEATERS',
      description: 'Episode I will mark a milestone on the big screen',
      textColor: 'black',
      specialBackground: true,
      },
    {
      src: '../../../assets/carrusel/ships-of-the-galaxy-the-marauder-_article-feature_5ac238ac.jpeg',
      title: 'Ships of the Galaxy:',
      description: 'The Marauder',
      textColor: 'white',
      specialBackground: false,
      },
    {
      src: '../../../assets/carrusel/dcom-feature-tt1year_0bd3dae1.jpeg',
      title: 'Star Wars TikTok',
      description: 'Turns 1 Today',
      textColor: 'black',
      specialBackground: true,
      },
    {
      src: '../../../assets/carrusel/quiz-the-bad-batch-episode-to-watch_article-feature_f9d63ce0.jpeg',
      title: 'Quiz: Which Episode of Star Wars: The Bad Batch',
      description: 'Should You Watch Right Now?',
      textColor: 'black',
      specialBackground: true,
      }
  ];
}
