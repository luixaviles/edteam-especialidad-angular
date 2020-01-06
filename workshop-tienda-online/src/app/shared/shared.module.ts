import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';



@NgModule({
  declarations: [LoginComponent, ToolbarComponent, ConfirmDialogComponent, ProgressIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    ConfirmDialogComponent,
    ProgressIndicatorComponent
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
