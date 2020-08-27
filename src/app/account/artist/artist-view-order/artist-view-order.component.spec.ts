import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewOrderComponent } from './artist-view-order.component';

describe('ArtistViewOrderComponent', () => {
  let component: ArtistViewOrderComponent;
  let fixture: ComponentFixture<ArtistViewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistViewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
