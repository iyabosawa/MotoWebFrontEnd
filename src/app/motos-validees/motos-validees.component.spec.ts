import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosValideesComponent } from './motos-validees.component';

describe('MotosValideesComponent', () => {
  let component: MotosValideesComponent;
  let fixture: ComponentFixture<MotosValideesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotosValideesComponent]
    });
    fixture = TestBed.createComponent(MotosValideesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
