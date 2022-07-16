import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../AppServicess/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService : AccountService,private toasterservice : ToastrService){}
  canActivate(): Observable<boolean> {
    return this.accountService.CurrentUser$.pipe(
      map(user => {
        if (user)
          return true;
          this.toasterservice.error("You need to login")
      })
    );
  }
  
}
