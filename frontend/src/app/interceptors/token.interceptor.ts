import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const TokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    const cloned = req.clone({
      setHeaders: {
        authorization: accessToken,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
