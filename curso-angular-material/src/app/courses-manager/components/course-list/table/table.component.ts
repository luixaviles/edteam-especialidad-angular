import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/course-manager/services/course.service';
import { Course } from 'src/app/courses-manager/models/course';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { CourseEditComponent } from '../../course-edit/course-edit.component';

@Component({
  selector: 'ed-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'specialty', 'edit'];
  dataSource = new MatTableDataSource<Course>();

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private courseService: CourseService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.courseService.getCourses()
      .then(courses => {
        this.dataSource.data = courses;
      });
  }

  applyFilter(text: string) {
    this.dataSource.filter = text.trim().toLocaleLowerCase();

  }

  edit(course: Course) {
    console.log('Edit', course);
    this.openDialog(course);
  }

  openDialog(course: Course) {
    const dialogRef = this.dialog.open(CourseEditComponent, {
      width: '600px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        console.log('El dialogo fue cerrado');
        return;
      }

      course = result;
      this.snackBar.open('Curso Actualizado', 'Cerrar', {
        duration: 3000
      });
    });
  }

}
