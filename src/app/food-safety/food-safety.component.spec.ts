import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSafetyComponent } from './food-safety.component';

describe('FoodSafetyComponent', () => {
  let component: FoodSafetyComponent;
  let fixture: ComponentFixture<FoodSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
