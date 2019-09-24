import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: 'dashboard', // localhost:4200/dashboard
    component: DashboardComponent
  },
  {
    path: 'navbar', // localhost:4200/navbar
    component: NavbarComponent
  },
  {
    path: 'sidenav', // localhost:4200/sidenav
    component: SidenavComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
