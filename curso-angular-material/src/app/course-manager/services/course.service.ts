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
  },
  {
    id: 2,
    name: 'JavaScript desde Cero',
    description: 'JavaScript es el lenguaje esencial para el desarrollo web.',
    specialty: 'javascript',
    startDate: '09/20/2020',
    categories: ['web', 'javascript'],
    isActive: true,
    level: 2
  },
  {
    id: 3,
    name: 'Angular Material',
    description: 'Angular Material implementa componentes basados en Material Design',
    specialty: 'angular',
    startDate: '08/10/2020',
    categories: ['web', 'angular', 'javascript'],
    isActive: false,
    level: 4
  },
  {
    id: 4,
    name: 'Angular Avanzado',
    description: 'Permite profundizar los conocimientos en Angular como framework',
    specialty: 'angular',
    startDate: '12/20/2019',
    categories: ['web', 'angular', 'javascript'],
    isActive: false,
    level: 8
  },
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
