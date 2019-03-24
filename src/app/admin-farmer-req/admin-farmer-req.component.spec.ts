import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFarmerReqComponent } from './admin-farmer-req.component';

describe('AdminFarmerReqComponent', () => {
  let component: AdminFarmerReqComponent;
  let fixture: ComponentFixture<AdminFarmerReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFarmerReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFarmerReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
