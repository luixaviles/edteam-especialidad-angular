import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TableroComponent } from './tablero/tablero.component';
import { TablaComponent } from './tabla/tabla.component';
import { ArbolComponent } from './arbol/arbol.component';
import { MaterialModule } from '../material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    TableroComponent,
    TablaComponent,
    ArbolComponent,
    ButtonsComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule { }
