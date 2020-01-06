import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ed-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    brand: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, this.minPrice(10)]),
    salePrice: new FormControl('', [Validators.required, this.minPrice(10)]),
    thumbImage: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  });

  @Input() title: string;
  @Input() labelSubmit: string;
  @Input()
  set model(m: Product){ // model="product"
    if(!m) {
      return;
    }
    console.log('set model', m);
    this.form.patchValue(m);
  }

  @Output() submit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.form.valid) {
      this.submit.emit(this.form.value); // Enviamos el modelo de datos: Product
    } else {
      console.error('Form is invalid');
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  private minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value !== undefined && control.value <= minPrice) {
        return {
          'minprice' : true
        }
      } else {
        return null;
      }
    }
  }
}
