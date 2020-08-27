import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewOrderReviewComponent } from './artist-view-order-review.component';

describe('ArtistViewOrderReviewComponent', () => {
  let component: ArtistViewOrderReviewComponent;
  let fixture: ComponentFixture<ArtistViewOrderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistViewOrderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewOrderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
