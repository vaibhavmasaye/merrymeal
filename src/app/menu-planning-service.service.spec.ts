import { TestBed } from '@angular/core/testing';

import { MenuPlanningServiceService } from './menu-planning-service.service';

describe('MenuPlanningServiceService', () => {
  let service: MenuPlanningServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPlanningServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
