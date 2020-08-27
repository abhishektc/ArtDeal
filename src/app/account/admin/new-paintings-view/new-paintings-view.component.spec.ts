import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaintingsViewComponent } from './new-paintings-view.component';

describe('NewPaintingsViewComponent', () => {
  let component: NewPaintingsViewComponent;
  let fixture: ComponentFixture<NewPaintingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaintingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaintingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
