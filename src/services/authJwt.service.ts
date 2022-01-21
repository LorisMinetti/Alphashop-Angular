import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiMsg } from 'src/app/models/ApiMsg';
import { Injectable } from '@angular/core';
import { Token } from 'src/app/models/Token';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  server : string = environment.server;
  port : string = environment.port;

  constructor(private httpClient : HttpClient) { }

  autenticaService(UserId: string, Password: string) {

    return this.httpClient.post<Token>(
      `${environment.authServerUri}`, {UserId, Password}).pipe(
        map(
          data => {
            sessionStorage.setItem("Utente", UserId);
            sessionStorage.setItem("AuthToken", `Bearer ${data.token}`);
            return data;
          }
        )
      );

  }

  getAuthToken = () : string => {

    let AuthHeader : string = "";
    var AuthToken =  sessionStorage.getItem("AuthToken");

    if (AuthToken != null)
      AuthHeader = AuthToken;

    return AuthHeader;
  }

  loggedUser = (): string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = (): boolean => (sessionStorage.getItem("Utente")) ? true : false;

  clearUser = (): void => sessionStorage.removeItem("Utente");

  clearAll = (): void => sessionStorage.clear();
}
