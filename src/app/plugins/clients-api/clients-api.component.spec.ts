import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAPIComponent } from './clients-api.component';

describe('ClientsAPIComponent', () => {
  let component: ClientsAPIComponent;
  let fixture: ComponentFixture<ClientsAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
