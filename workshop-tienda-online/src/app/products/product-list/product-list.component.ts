import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(result => this.products = result);
  }

}
