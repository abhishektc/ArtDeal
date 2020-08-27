import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintDetailsComponent } from './paint-details.component';

describe('PaintDetailsComponent', () => {
  let component: PaintDetailsComponent;
  let fixture: ComponentFixture<PaintDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
