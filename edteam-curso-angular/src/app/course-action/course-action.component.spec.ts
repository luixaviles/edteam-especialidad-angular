import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActionComponent } from './course-action.component';

describe('CourseActionComponent', () => {
  let component: CourseActionComponent;
  let fixture: ComponentFixture<CourseActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
