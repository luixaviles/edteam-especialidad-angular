import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from '../../models/course';

@Component({
  selector: 'ed-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseEditComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ) {
    course.startDate = new Date(course.startDate).toISOString();
  }

  ngOnInit() {
  }

  update() {
    this.dialogRef.close(this.course);
  }

  cancel() {
    this.dialogRef.close();
  }

}
