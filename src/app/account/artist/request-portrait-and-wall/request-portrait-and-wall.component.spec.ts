import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPortraitAndWallComponent } from './request-portrait-and-wall.component';

describe('RequestPortraitAndWallComponent', () => {
  let component: RequestPortraitAndWallComponent;
  let fixture: ComponentFixture<RequestPortraitAndWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPortraitAndWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPortraitAndWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
