import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryComponentComponent } from './delivery-component.component';

describe('DeliveryComponentComponent', () => {
  let component: DeliveryComponentComponent;
  let fixture: ComponentFixture<DeliveryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
