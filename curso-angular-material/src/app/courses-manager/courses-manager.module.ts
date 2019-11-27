import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CardsComponent } from './components/course-list/cards/cards.component';
import { ListComponent } from './components/course-list/list/list.component';
import { TreeComponent } from './components/course-list/tree/tree.component';
import { ExpansionComponent } from './components/course-list/expansion/expansion.component';
import { TableComponent } from './components/course-list/table/table.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';


@NgModule({
  entryComponents: [CourseEditComponent],
  declarations: [CoursesManagerComponent, SidenavComponent, ToolbarComponent, CourseAddComponent, CourseListComponent, CardsComponent, ListComponent, TreeComponent, ExpansionComponent, TableComponent, CourseEditComponent],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CoursesManagerModule { }
