import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocaliteComponent } from './cocalite.component';

describe('CocaliteComponent', () => {
  let component: CocaliteComponent;
  let fixture: ComponentFixture<CocaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
