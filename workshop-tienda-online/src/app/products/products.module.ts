import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductsComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ProductsModule { }
