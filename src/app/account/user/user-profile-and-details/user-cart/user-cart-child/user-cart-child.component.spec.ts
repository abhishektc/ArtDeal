import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartChildComponent } from './user-cart-child.component';

describe('UserCartChildComponent', () => {
  let component: UserCartChildComponent;
  let fixture: ComponentFixture<UserCartChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
