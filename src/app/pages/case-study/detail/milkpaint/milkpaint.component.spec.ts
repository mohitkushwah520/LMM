import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkpaintComponent } from './milkpaint.component';

describe('MilkpaintComponent', () => {
  let component: MilkpaintComponent;
  let fixture: ComponentFixture<MilkpaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkpaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
