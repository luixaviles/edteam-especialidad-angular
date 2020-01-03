import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
