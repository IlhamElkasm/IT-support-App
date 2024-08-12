import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTechnicienComponent } from './register-technicien.component';

describe('RegisterTechnicienComponent', () => {
  let component: RegisterTechnicienComponent;
  let fixture: ComponentFixture<RegisterTechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTechnicienComponent]
    });
    fixture = TestBed.createComponent(RegisterTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
