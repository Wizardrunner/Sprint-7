// welcome-page-component.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome-page-component.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

fdescribe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        NgbCarouselModule, 
        WelcomeComponent 
      ]
    }).compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
