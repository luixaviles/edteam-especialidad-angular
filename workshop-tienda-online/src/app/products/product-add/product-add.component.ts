import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Product } from '../shared/models/product';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private service: ProductsService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submit(product: Product) {
    console.log('Going to save', product);
    this.service.add(product)
      .pipe(
        catchError(error => {
          this.snackBar.open(error, null, {
            duration: 3000
          });
          // catch & replace
          return EMPTY;
        })
      )
      .subscribe(result => {
        console.log('The product has been added', result);
        this.router.navigate(['']);
        // mensaje de confirmacion
        this.snackBar.open('Product has been added', 'Close', {
          duration: 3000// milliseconds
        });
      });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
