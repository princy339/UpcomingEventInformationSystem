import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkShopComponent } from './all-work-shop.component';

describe('AllWorkShopComponent', () => {
  let component: AllWorkShopComponent;
  let fixture: ComponentFixture<AllWorkShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorkShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
