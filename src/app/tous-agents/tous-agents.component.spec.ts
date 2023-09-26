import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousAgentsComponent } from './tous-agents.component';

describe('TousAgentsComponent', () => {
  let component: TousAgentsComponent;
  let fixture: ComponentFixture<TousAgentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousAgentsComponent]
    });
    fixture = TestBed.createComponent(TousAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
