import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistListComponent } from './admin-artist-list.component';

describe('AdminArtistListComponent', () => {
  let component: AdminArtistListComponent;
  let fixture: ComponentFixture<AdminArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
