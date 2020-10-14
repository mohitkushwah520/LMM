import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailTextComponent } from './rail-text.component';

describe('RailTextComponent', () => {
  let component: RailTextComponent;
  let fixture: ComponentFixture<RailTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
