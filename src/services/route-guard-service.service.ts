import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate{

  constructor(private BasicAuth: AuthappService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    /* Sto specificando che se il flag isLogged non è aggiornato a true, ovvero non sono loggato,
    Non posso entrare in nessuna pagina, ma ritorno direttamente alla schermata di login. La variabile rimane a false.
    Altrimenti la aggiorno e posso entrare
    */
    if(!this.BasicAuth.isLogged()){
      this.route.navigate(['login']);
      return false;
    } else {
      return true;
    }

  }
}
