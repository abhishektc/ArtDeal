import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderNameComponent } from './my-order-name.component';

describe('MyOrderNameComponent', () => {
  let component: MyOrderNameComponent;
  let fixture: ComponentFixture<MyOrderNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
