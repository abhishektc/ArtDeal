import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistProfileViewComponent } from './admin-artist-profile-view.component';

describe('AdminArtistProfileViewComponent', () => {
  let component: AdminArtistProfileViewComponent;
  let fixture: ComponentFixture<AdminArtistProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtistProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtistProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
