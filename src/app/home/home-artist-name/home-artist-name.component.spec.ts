import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtistNameComponent } from './home-artist-name.component';

describe('HomeArtistNameComponent', () => {
  let component: HomeArtistNameComponent;
  let fixture: ComponentFixture<HomeArtistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
