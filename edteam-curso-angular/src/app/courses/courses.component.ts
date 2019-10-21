import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { catchError, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  titulo: string = 'Lista de Cursos';
  anchoImagen: string = '40px';
  @ViewChild('filtro', {static: false})
  filtro: ElementRef;

  private _textoFiltro: string;

  set textoFiltro(t: string) {
    console.log('textoFiltro', t);
    this._textoFiltro = t;
    // filtrar los cursos
    this.filtrarCursos(t);
    // this.cursos = t? this.filtrarCursos(t): this.coursesService.getCursos();
  }

  get textoFiltro() {
    return this._textoFiltro;
  }

  cursos: Curso[];
  cursosFiltrados: Curso[];
  mensajeError: string;

  constructor(private router: Router,
              private coursesService: CoursesService) {
    // this.eliminarCursos();
  }

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this.coursesService.getCursos()
    .pipe(
      tap(cursos => console.log('Cursos', cursos)),
      catchError(error => {
        this.mensajeError = error;
        // catch and replace
        return EMPTY;
      })
    )
    .subscribe((cursos: Curso[])=> {
      this.cursos = cursos;
      this.cursosFiltrados = cursos;
    });
  }

  ngAfterViewInit() {
    // this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto: string) {
    this.cursosFiltrados = this.cursos.filter(
      (curso: Curso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0);
  }

  eliminarCursos() {
    setTimeout(() => {
      this.cursos = [];
    }, 5000);
  }

  onEditCurso(curso: Curso) {
    console.log('[Courses] Edit', curso);
    // Redireccion: course/{curso.id}
    this.router.navigate([`course/${curso.id}`]);
  }

  onDeleteCurso(curso: Curso) {
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: Curso)=>{
      return c.id !== curso.id
    });
  }
}
