import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from '../curso';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ed-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  model: Curso = {} ;

  @ViewChild('formAdd', {static: false})
  form: FormControl;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit', this.form);
    if(this.form.valid) {
      // Enviar el modelo a un servicio
      console.log('modelo', this.model);
      // Reinicializar el formulario
      this.form.reset();
    }
  }
}
