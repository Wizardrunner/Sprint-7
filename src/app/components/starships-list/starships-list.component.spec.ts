// starships-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipListComponent } from './starships-list.component';

describe('StarshipListComponent', () => {
  let component: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

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
