import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitOrWallpaintRequestViewComponent } from './portrait-or-wallpaint-request-view.component';

describe('PortraitOrWallpaintRequestViewComponent', () => {
  let component: PortraitOrWallpaintRequestViewComponent;
  let fixture: ComponentFixture<PortraitOrWallpaintRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitOrWallpaintRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitOrWallpaintRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
