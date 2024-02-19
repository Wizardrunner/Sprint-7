// starship-details.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipDetailsComponent } from './starship-details.component';
import { StarshipService } from '../../services/starships.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('StarshipDetailsComponent', () => {
  let component: StarshipDetailsComponent;
  let fixture: ComponentFixture<StarshipDetailsComponent>;
  let mockStarshipService: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    // Inicializa mockStarshipService con métodos simulados
    mockStarshipService = jasmine.createSpyObj('StarshipService', ['getPilotsDetails', 'getMoviesDetails']);
    // Configura los métodos simulados para devolver valores específicos
    mockStarshipService.getPilotsDetails.and.returnValue(of([]));
    mockStarshipService.getMoviesDetails.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StarshipDetailsComponent],
      providers: [{ provide: StarshipService, useValue: mockStarshipService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailsComponent);
    component = fixture.componentInstance;
    component.starship = {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '100000',
      length: '34.37',
      url: 'https://swapi.dev/api/starships/10/"',
      cargo_capacity: '100000',
      MGLT: '75',
      consumables: '2 months',
      crew: '4',
      passengers: '6',
      max_atmosphering_speed: '1050',
      hyperdrive_rating: '0.5',
      "pilots": [
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
          created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T21:23:49.870000Z',
      id: '10'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle empty pilots list correctly', () => {
    expect(component.pilots.length).toBe(0);
  });

  it('should display a message when there are no pilots', () => {
    const noPilotsMessage = fixture.debugElement.nativeElement.querySelector('.alert-warning');
    expect(noPilotsMessage).toBeTruthy();
  });
});