import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactQueryComponent } from './contact-query.component';

describe('ContactQueryComponent', () => {
  let component: ContactQueryComponent;
  let fixture: ComponentFixture<ContactQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
