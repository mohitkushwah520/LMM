import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymeeComponent } from './mymee.component';

describe('MymeeComponent', () => {
  let component: MymeeComponent;
  let fixture: ComponentFixture<MymeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
