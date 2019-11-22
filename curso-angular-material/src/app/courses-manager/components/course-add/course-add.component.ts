import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Category } from '../../models/category';

@Component({
  selector: 'ed-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course: Course = {};
  categories: Category[] = [
    {
      name: 'angular',
      checked: false
    },
    {
      name: 'javascript',
      checked: false
    },
    {
      name: 'web',
      checked: false
    },
    {
      name: 'mobile',
      checked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.course.categories = this.categories
      .filter(c => c.checked)
      .map(c => c.name);

    console.log('Course', this.course);
  }

}
