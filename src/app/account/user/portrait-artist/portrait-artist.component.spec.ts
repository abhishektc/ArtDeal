import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitArtistComponent } from './portrait-artist.component';

describe('PortraitArtistComponent', () => {
  let component: PortraitArtistComponent;
  let fixture: ComponentFixture<PortraitArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
