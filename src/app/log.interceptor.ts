import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem("token");
    if(token) {
      const cloned = req.clone({headers: req.headers.set("Authorization", "Bearer " + token)});
      return next.handle(cloned)
    } else {
      return next.handle(req)
    }
  }
}
