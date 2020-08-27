import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRegisterComponent } from './artist-register.component';

describe('ArtistRegisterComponent', () => {
  let component: ArtistRegisterComponent;
  let fixture: ComponentFixture<ArtistRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
