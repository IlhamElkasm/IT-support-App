import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPanneComponent } from './all-panne.component';

describe('AllPanneComponent', () => {
  let component: AllPanneComponent;
  let fixture: ComponentFixture<AllPanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPanneComponent]
    });
    fixture = TestBed.createComponent(AllPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
