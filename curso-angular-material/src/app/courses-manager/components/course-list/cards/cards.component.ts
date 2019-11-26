import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course-manager/services/course.service';
import { Course } from 'src/app/courses-manager/models/course';

@Component({
  selector: 'ed-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses()
      .then(courses => this.courses = courses);
  }

}
