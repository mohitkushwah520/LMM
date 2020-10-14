import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltideComponent } from './scrolltide.component';

describe('ScrolltideComponent', () => {
  let component: ScrolltideComponent;
  let fixture: ComponentFixture<ScrolltideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrolltideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
