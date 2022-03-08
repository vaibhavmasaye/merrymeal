import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationInfoComponent } from './transation-info.component';

describe('TransationInfoComponent', () => {
  let component: TransationInfoComponent;
  let fixture: ComponentFixture<TransationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
