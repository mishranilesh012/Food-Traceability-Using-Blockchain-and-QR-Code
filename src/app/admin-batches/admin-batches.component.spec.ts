import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchesComponent } from './admin-batches.component';

describe('AdminBatchesComponent', () => {
  let component: AdminBatchesComponent;
  let fixture: ComponentFixture<AdminBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
