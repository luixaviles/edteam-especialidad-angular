import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModel } from 'src/app/shared/models/confirm-dialog-model';

@Component({
  selector: 'ed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductsService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog
              ) { }

  ngOnInit() {
    this.loadProducts();
  }

  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: <ConfirmDialogModel>{
        title: 'Delete Product',
        message: 'Are you sure to delete this product?'
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if(result) {
          this.sendDeleteRequest(product);
        }
      });
  }

  private loadProducts() {
    this.service.getAll()
    .subscribe(result => this.products = result);
  }

  private sendDeleteRequest(product: Product) {
    this.service.delete(product.id)
    .subscribe(response => {
      console.log('Product has been deleted', response);
      this.loadProducts();
      this.snackBar.open('Product has been deleted', 'Close', {
        duration: 3000
      });
    });
  }
}
