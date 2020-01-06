import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  add(product: Product): Observable<Product>{
    // /products: POST
    return this.httpClient.post<Product>(`${PRODUCTS_URL}`, product)
    .pipe(
      catchError(this.handleError)
    );
  }

  get(id: string): Observable<Product> {
    // GET /products/id
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  update(product: Product): Observable<Product> {
    // UPDATE /products/id
    return this.httpClient.put<Product>(`${PRODUCTS_URL}/${product.id}`, product)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<Product> {
    // DELETE /products/id
    return this.httpClient.delete<Product>(`${PRODUCTS_URL}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('Client error', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    return throwError('Cannot perform the request, please try again later');
  }

}
