import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArtistApprovalComponent } from './new-artist-approval.component';

describe('NewArtistApprovalComponent', () => {
  let component: NewArtistApprovalComponent;
  let fixture: ComponentFixture<NewArtistApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArtistApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArtistApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
