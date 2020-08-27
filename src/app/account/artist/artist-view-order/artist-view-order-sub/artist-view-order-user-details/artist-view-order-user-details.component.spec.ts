import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewOrderUserDetailsComponent } from './artist-view-order-user-details.component';

describe('ArtistViewOrderUserDetailsComponent', () => {
  let component: ArtistViewOrderUserDetailsComponent;
  let fixture: ComponentFixture<ArtistViewOrderUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistViewOrderUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewOrderUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
