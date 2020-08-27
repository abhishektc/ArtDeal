import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallArtistComponent } from './wall-artist.component';

describe('WallArtistComponent', () => {
  let component: WallArtistComponent;
  let fixture: ComponentFixture<WallArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
