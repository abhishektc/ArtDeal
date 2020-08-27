import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPaintingsComponent } from './add-new-paintings.component';

describe('AddNewPaintingsComponent', () => {
  let component: AddNewPaintingsComponent;
  let fixture: ComponentFixture<AddNewPaintingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPaintingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
