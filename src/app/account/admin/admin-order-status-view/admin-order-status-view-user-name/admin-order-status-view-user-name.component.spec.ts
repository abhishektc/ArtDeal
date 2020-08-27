import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderStatusViewUserNameComponent } from './admin-order-status-view-user-name.component';

describe('AdminOrderStatusViewUserNameComponent', () => {
  let component: AdminOrderStatusViewUserNameComponent;
  let fixture: ComponentFixture<AdminOrderStatusViewUserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderStatusViewUserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderStatusViewUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
