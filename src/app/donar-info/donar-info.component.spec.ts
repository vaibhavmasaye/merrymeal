import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarInfoComponent } from './donar-info.component';

describe('DonarInfoComponent', () => {
  let component: DonarInfoComponent;
  let fixture: ComponentFixture<DonarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
