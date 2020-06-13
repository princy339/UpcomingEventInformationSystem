import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionsComponent } from './auditions.component';

describe('AuditionsComponent', () => {
  let component: AuditionsComponent;
  let fixture: ComponentFixture<AuditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
