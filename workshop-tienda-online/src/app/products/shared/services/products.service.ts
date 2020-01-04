import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`);
  }

  add(product: Product): Observable<Product>{
    // /products: POST
    return this.httpClient.post<Product>(`${PRODUCTS_URL}`, product);
  }
}
