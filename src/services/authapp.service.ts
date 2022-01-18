import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiMsg } from 'src/app/models/ApiMsg';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  server : string = "localhost";
  port : string = "5051";

  constructor(private httpClient : HttpClient) { }

  autenticaService(UserId: string, Password: string) {

    let headers = new HttpHeaders(
      {Authorization:   "Basic " + window.btoa(UserId + ":" + Password) }
    )

    return this.httpClient.get<ApiMsg>(
      `http://${this.server}:${this.port}/api/articoli/test`, {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem("Utente", UserId);
            return data;
          }
        )
      );

  }

  /*
  autentica = (userid: string, password: string) : boolean => {
    var retVal = (userid === 'Nicola' && password === '123_Stella') ? true : false;

    if (retVal) {
      sessionStorage.setItem("Utente",userid);
    }

    return retVal;
  }
  */

  loggedUser = (): string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = (): boolean => (sessionStorage.getItem("Utente")) ? true : false;

  clearUser = (): void => sessionStorage.removeItem("Utente");

  clearAll = (): void => sessionStorage.clear();
}
