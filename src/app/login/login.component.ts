import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID: string = "";
  password: string = "";

  autenticato: boolean = true;

  errorMsg: string = "Spiacente, la user Id e/o la password sono errati!";

  /*
  Queste due variabili verranno poi passate alle variabili di JumboTron come stringhe.
  e' una questione stilistica. Invece di inserire la stringa hardCoded all'interno del codice html, la dichiaro qui e
  passo solo la variabile.
  */
  titolo: string = "Accesso ed autenticazione"
  sottotitolo: string = "Procedi ad inserire userId e Password!";

  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userID);

    if(this.BasicAuth.autentica(this.userID, this.password)){
      this.route.navigate(['welcome', this.userID]);

      this.autenticato = true;
    } else {
      this.autenticato = false;
    }

}
}
