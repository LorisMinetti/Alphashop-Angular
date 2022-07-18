import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password:string) : boolean => {
    var retVal = (userid === 'Loris' && password === '123_Stella') ? true : false;

    /*
    Inserisco il controllo: se l'utente viene correttamente autenticato,
    oltre che garantire l'accesso ritornando true,
    posso aggiungere alla sessionStorage l'utente  utilizzando il metodo .setItem(K,V)
    */
    if(retVal){
      /*   sessionStorage è già predisposto di default nel linguaggio angular.      */
      sessionStorage.setItem("Utente",userid);
    }
    return retVal;
  }

  loggedUser = () : string | null =>
  (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => (sessionStorage.getItem("Utente")) ? true : false;

  /* Creo due metodi per eliminare uno specifico utente o direttamente l'intera sessione.   */
  clearUser = () : void => sessionStorage.removeItem("Utente");

  clearAll = (): void => sessionStorage.clear();
}
