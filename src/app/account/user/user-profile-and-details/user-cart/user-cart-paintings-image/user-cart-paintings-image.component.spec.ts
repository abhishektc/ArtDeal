import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartPaintingsImageComponent } from './user-cart-paintings-image.component';

describe('UserCartPaintingsImageComponent', () => {
  let component: UserCartPaintingsImageComponent;
  let fixture: ComponentFixture<UserCartPaintingsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartPaintingsImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartPaintingsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
