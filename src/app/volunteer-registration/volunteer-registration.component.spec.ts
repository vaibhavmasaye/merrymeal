import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegistrationComponent } from './volunteer-registration.component';

describe('VolunteerRegistrationComponent', () => {
  let component: VolunteerRegistrationComponent;
  let fixture: ComponentFixture<VolunteerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
