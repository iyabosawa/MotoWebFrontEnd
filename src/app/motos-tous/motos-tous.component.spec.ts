import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosTousComponent } from './motos-tous.component';

describe('MotosTousComponent', () => {
  let component: MotosTousComponent;
  let fixture: ComponentFixture<MotosTousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotosTousComponent]
    });
    fixture = TestBed.createComponent(MotosTousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
