import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderStatusViewComponent } from './admin-order-status-view.component';

describe('AdminOrderStatusViewComponent', () => {
  let component: AdminOrderStatusViewComponent;
  let fixture: ComponentFixture<AdminOrderStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
