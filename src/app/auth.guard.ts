import { Injectable,inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      // We get all the menu names from the dataBase
      console.log(route?.routeConfig?.path);
    if(localStorage.getItem('alreadyLoggedIn') ==='yes'  ){
      return true;
    }
    else{
      this.router.navigate(['no-access'])
      return false;
    }
  }

}
