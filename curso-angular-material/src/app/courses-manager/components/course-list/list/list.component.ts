import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/courses-manager/models/course';
import { CourseService } from 'src/app/course-manager/services/course.service';

@Component({
  selector: 'ed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }

}
