import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';

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
  textoFiltro: string = '';

  cursos: any[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'August 10, 2019',
      description:
        'Lleva JavaScript al siguiente nivel con tipado estático y programación orientada a objetos',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.png'
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'September 4, 2019',
      description: 'Aprende el framework frontend con más demanda del mercado',
      price: 29.99,
      rating: 5,
      imageUrl: 'assets/images/angular.png'
    },
    {
      id: 3,
      name: 'Formularios y APIs con Angular',
      startDate: 'October 20, 2019',
      description:
        'Aprende a consumir datos de APIs Rest y a gestionar formularios con Angular',
      price: 23.5,
      rating: 3.9,
      imageUrl: 'assets/images/angular.png'
    }
  ];

  constructor(private router: Router) {
    // this.eliminarCursos();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = 'Angular';
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
