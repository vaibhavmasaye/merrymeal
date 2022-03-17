import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverRegistrationComponent } from './caregiver-registration.component';

describe('CaregiverRegistrationComponent', () => {
  let component: CaregiverRegistrationComponent;
  let fixture: ComponentFixture<CaregiverRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregiverRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
