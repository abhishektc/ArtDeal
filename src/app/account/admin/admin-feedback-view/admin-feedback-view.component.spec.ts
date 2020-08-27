import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbackViewComponent } from './admin-feedback-view.component';

describe('AdminFeedbackViewComponent', () => {
  let component: AdminFeedbackViewComponent;
  let fixture: ComponentFixture<AdminFeedbackViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeedbackViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
