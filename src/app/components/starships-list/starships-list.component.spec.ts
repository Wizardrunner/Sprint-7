// starships-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Asegúrate de que el nombre del componente importado sea el correcto
import { StarshipListComponent } from './starships-list.component';

describe('StarshipListComponent', () => {
  let component: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Corrige esto para que use 'declarations' en lugar de 'imports'
      declarations: [StarshipListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
