import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewOrderPaintPwtNameComponent } from './artist-view-order-paint-pwt-name.component';

describe('ArtistViewOrderPaintPwtNameComponent', () => {
  let component: ArtistViewOrderPaintPwtNameComponent;
  let fixture: ComponentFixture<ArtistViewOrderPaintPwtNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistViewOrderPaintPwtNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewOrderPaintPwtNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
