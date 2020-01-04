import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlDirective, FormControl } from '@angular/forms';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  constructor(private service: ProductsService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submit() {
    if(this.form.valid) {
      const product = this.form.value; //Product
      console.log('Going to save', product);
      this.service.add(product)
        .subscribe(result => {
          console.log('The product has been added', result);
          this.router.navigate(['']);
          // mensaje de confirmacion
          this.snackBar.open('Product has been added', 'Close', {
            duration: 3000// milliseconds
          });
        });

    } else {
      console.error('Form is invalid');
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
