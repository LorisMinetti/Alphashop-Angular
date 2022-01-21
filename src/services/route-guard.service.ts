import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthJwtService } from './authJwt.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  token : string = '';
  ruoli : string[] = new Array();
  items : any;

  constructor(private Auth: AuthJwtService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot)  {

    this.token = this.Auth.getAuthToken();

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);

    this.items = decodedToken['role'];

    if (!Array.isArray(this.items))
      this.ruoli.push(this.items);
    else
      this.ruoli = this.items;

    if (!this.Auth.isLogged()) {
      this.router.navigate(['login'], { queryParams: {nologged: true}});
      return false;
    } else {

      let roles : string[] = new Array();
      roles = route.data['roles'];

      if (roles === null || roles.length === 0)
      {
        return true;
      }
      else if (this.ruoli.some(r => roles.includes(r)))
      {
        return true;
      }
      else
      {
        this.router.navigate(['forbidden']);
        return false;
      }

    }
  }
}
