import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { ProgressIndicatorService } from './progress-indicator.service';
import { Observable } from 'rxjs';
import { tap, finalize, delay } from 'rxjs/operators';

// Angular Interceptors
@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorInterceptor implements HttpInterceptor {
  constructor(private service: ProgressIndicatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
           .pipe(
             tap(value => this.service.show()),
             delay(1000),
             finalize(() => this.service.hide())
           );
  }
}
