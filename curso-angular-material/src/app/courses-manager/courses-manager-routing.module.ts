import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesManagerComponent } from './courses-manager.component';


const routes: Routes = [
  {
    path: '**',
    component: CoursesManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagerRoutingModule { }
