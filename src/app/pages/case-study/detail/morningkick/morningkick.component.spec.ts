import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningkickComponent } from './morningkick.component';

describe('MorningkickComponent', () => {
  let component: MorningkickComponent;
  let fixture: ComponentFixture<MorningkickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningkickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningkickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
