import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmmButtonComponent } from './lmm-button.component';

describe('LmmButtonComponent', () => {
  let component: LmmButtonComponent;
  let fixture: ComponentFixture<LmmButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmmButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
