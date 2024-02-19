import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; // Importa RouterModule


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page-component.component.html',
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
