import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerComponent } from './farmer.component';

describe('FarmerComponent', () => {
  let component: FarmerComponent;
  let fixture: ComponentFixture<FarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
