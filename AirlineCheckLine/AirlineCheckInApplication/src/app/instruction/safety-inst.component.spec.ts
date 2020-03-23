import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyInstComponent } from './safety-inst.component';

describe('SafetyInstComponent', () => {
  let component: SafetyInstComponent;
  let fixture: ComponentFixture<SafetyInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
