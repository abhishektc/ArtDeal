import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewOrderSubComponent } from './artist-view-order-sub.component';

describe('ArtistViewOrderSubComponent', () => {
  let component: ArtistViewOrderSubComponent;
  let fixture: ComponentFixture<ArtistViewOrderSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistViewOrderSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewOrderSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
