import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartGetArtistNameComponent } from './user-cart-get-artist-name.component';

describe('UserCartGetArtistNameComponent', () => {
  let component: UserCartGetArtistNameComponent;
  let fixture: ComponentFixture<UserCartGetArtistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartGetArtistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartGetArtistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
