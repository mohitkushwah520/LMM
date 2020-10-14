import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyehopComponent } from './eyehop.component';

describe('EyehopComponent', () => {
  let component: EyehopComponent;
  let fixture: ComponentFixture<EyehopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyehopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyehopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
