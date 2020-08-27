import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileAndPriceComponent } from './artist-profile-and-price.component';

describe('ArtistProfileAndPriceComponent', () => {
  let component: ArtistProfileAndPriceComponent;
  let fixture: ComponentFixture<ArtistProfileAndPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileAndPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
