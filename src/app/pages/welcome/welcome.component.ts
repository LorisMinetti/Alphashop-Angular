import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { }

  utente: string = "";
  titolo: string = "Benvenuti in Alphashop";
  sottotitolo: string = "Visualizza le offerte del giorno";
  show: boolean = false;

  saluti : string = "";
  errore : string="";

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userID'];
  }

  getSaluti = () : void => {
    this.salutiSrv.getSaluti(this.utente).subscribe(
      response => this.handleResponse(response)
    )
  }

  handleResponse(response: Object) {
    this.saluti = response.toString();
  }

  handleError(error: any){
    console.log(error);
    this.errore = error.error.message;
  }
}
