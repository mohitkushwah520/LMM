import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytbondComponent } from './bytbond.component';

describe('BytbondComponent', () => {
  let component: BytbondComponent;
  let fixture: ComponentFixture<BytbondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BytbondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BytbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
