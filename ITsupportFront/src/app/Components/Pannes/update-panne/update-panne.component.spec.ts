import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanneComponent } from './update-panne.component';

describe('UpdatePanneComponent', () => {
  let component: UpdatePanneComponent;
  let fixture: ComponentFixture<UpdatePanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePanneComponent]
    });
    fixture = TestBed.createComponent(UpdatePanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
