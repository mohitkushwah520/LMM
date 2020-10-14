import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoudMobLabComponent } from './loud-mob-lab.component';

describe('LoudMobLabComponent', () => {
  let component: LoudMobLabComponent;
  let fixture: ComponentFixture<LoudMobLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoudMobLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoudMobLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
