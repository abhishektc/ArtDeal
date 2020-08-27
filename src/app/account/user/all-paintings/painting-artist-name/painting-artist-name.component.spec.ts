import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingArtistNameComponent } from './painting-artist-name.component';

describe('PaintingArtistNameComponent', () => {
  let component: PaintingArtistNameComponent;
  let fixture: ComponentFixture<PaintingArtistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingArtistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingArtistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
