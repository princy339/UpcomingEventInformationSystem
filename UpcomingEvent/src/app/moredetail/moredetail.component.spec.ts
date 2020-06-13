import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailComponent } from './moredetail.component';

describe('MoredetailComponent', () => {
  let component: MoredetailComponent;
  let fixture: ComponentFixture<MoredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
