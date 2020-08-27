import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderStatusViewArtistNameComponent } from './admin-order-status-view-artist-name.component';

describe('AdminOrderStatusViewArtistNameComponent', () => {
  let component: AdminOrderStatusViewArtistNameComponent;
  let fixture: ComponentFixture<AdminOrderStatusViewArtistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderStatusViewArtistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderStatusViewArtistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
