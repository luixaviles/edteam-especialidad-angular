import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesManagerComponent } from './courses-manager.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseListComponent } from './components/course-list/course-list.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      }, {
        path: 'add', // /manager/add
        component: CourseAddComponent
      }, {
        path: 'list',
        component: CourseListComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagerRoutingModule { }
