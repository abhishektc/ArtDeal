import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaintingsComponent } from './all-paintings.component';

describe('AllPaintingsComponent', () => {
  let component: AllPaintingsComponent;
  let fixture: ComponentFixture<AllPaintingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPaintingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
