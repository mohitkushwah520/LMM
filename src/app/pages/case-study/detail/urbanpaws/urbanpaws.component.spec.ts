import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanpawsComponent } from './urbanpaws.component';

describe('UrbanpawsComponent', () => {
  let component: UrbanpawsComponent;
  let fixture: ComponentFixture<UrbanpawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanpawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanpawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
