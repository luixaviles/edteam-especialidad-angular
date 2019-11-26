import { Injectable } from '@angular/core';
import { Course } from 'src/app/courses-manager/models/course';

const data: Course[] = [
  {
    id: 0,
    name: 'Angular desde Cero',
    description: 'Angular es un Framework para el desarrollo web...',
    specialty: 'angular',
    startDate: '10/11/2019',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 1,
    name: 'TypeScript desde Cero',
    description: 'TypeScript es un Superconjunto de JavaScript',
    specialty: 'angular',
    startDate: '05/20/2019',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 3
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Promise<Course[]> {
    return new Promise((resolve, reject)=> {
      resolve(data);
    });
  }
}
