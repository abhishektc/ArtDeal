import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaintingsListComponent } from './new-paintings-list.component';

describe('NewPaintingsListComponent', () => {
  let component: NewPaintingsListComponent;
  let fixture: ComponentFixture<NewPaintingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaintingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaintingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
