import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { COURSES } from './data/courses';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //DI
  constructor(private httpClient: HttpClient) { }

  // getCursos(): Curso[] {
  //   return COURSES;
  // }

  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('assets/api/courses/courses.json')
    .pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('Error de cliente', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    return throwError('Hubo un problema al obtener los datos. Intente mas tarde')
  }
}
