import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Toast, ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toaster: ToastrService,private route :Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error=>{
        if(error){
          switch(error.status){
            case 400:
              if(error.error.errors){
                const modelStateErrors=[];
                for(const key of error.error.errors){
                  if(error.error.errors[key]){
                    modelStateErrors.push(error.error.errors[key])
                  }
                }
                throwError (modelStateErrors) //[bugg]:need to flat the validated objects comming from server validation
              }else{
                this.toaster.error(error.statusText,error.status);
              }
              break;
              case 401:
                this.toaster.error(error.statusText,error.status)
                break;
              case 404:
                this.route.navigateByUrl("/not-found");
                break; 
              case 500:
                const NavigationExtras: NavigationExtras = {state:{error:error.error}};
                this.route.navigateByUrl("/server-error",NavigationExtras);
                break;  
              default:
                this.toaster.error("somthing went wrong");
                console.log(error);
                break;
          }
        }

        return throwError(error)
      })

    )
  }
}
