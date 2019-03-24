import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInspectorComponent } from './farm-inspector.component';

describe('FarmInspectorComponent', () => {
  let component: FarmInspectorComponent;
  let fixture: ComponentFixture<FarmInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
