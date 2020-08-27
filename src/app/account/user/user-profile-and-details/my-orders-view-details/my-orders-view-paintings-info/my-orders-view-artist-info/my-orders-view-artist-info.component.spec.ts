import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersViewArtistInfoComponent } from './my-orders-view-artist-info.component';

describe('MyOrdersViewArtistInfoComponent', () => {
  let component: MyOrdersViewArtistInfoComponent;
  let fixture: ComponentFixture<MyOrdersViewArtistInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersViewArtistInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersViewArtistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
