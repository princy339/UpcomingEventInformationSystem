import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposComponent } from './expos.component';

describe('ExposComponent', () => {
  let component: ExposComponent;
  let fixture: ComponentFixture<ExposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
