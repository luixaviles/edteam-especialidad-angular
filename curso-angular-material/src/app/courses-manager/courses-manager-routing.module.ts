import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesManagerComponent } from './courses-manager.component';
import { CourseAddComponent } from './components/course-add/course-add.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesManagerComponent,
    children: [
      {
        path: 'add', // /manager/add
        component: CourseAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagerRoutingModule { }
