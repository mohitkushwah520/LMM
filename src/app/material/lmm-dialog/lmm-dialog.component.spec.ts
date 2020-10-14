import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmmDialogComponent } from './lmm-dialog.component';

describe('LmmDialogComponent', () => {
  let component: LmmDialogComponent;
  let fixture: ComponentFixture<LmmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
