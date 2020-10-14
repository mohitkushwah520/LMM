import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidaleComponent } from './rapidale.component';

describe('RapidaleComponent', () => {
  let component: RapidaleComponent;
  let fixture: ComponentFixture<RapidaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
