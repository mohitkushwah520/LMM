import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyFooterComponent } from './monkey-footer.component';

describe('MonkeyFooterComponent', () => {
  let component: MonkeyFooterComponent;
  let fixture: ComponentFixture<MonkeyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
