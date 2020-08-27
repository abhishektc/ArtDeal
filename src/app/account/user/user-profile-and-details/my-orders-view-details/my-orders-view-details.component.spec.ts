import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersViewDetailsComponent } from './my-orders-view-details.component';

describe('MyOrdersViewDetailsComponent', () => {
  let component: MyOrdersViewDetailsComponent;
  let fixture: ComponentFixture<MyOrdersViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
