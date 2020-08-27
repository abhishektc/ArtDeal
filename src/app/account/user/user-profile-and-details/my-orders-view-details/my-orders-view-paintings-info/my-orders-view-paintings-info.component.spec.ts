import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersViewPaintingsInfoComponent } from './my-orders-view-paintings-info.component';

describe('MyOrdersViewPaintingsInfoComponent', () => {
  let component: MyOrdersViewPaintingsInfoComponent;
  let fixture: ComponentFixture<MyOrdersViewPaintingsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersViewPaintingsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersViewPaintingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
