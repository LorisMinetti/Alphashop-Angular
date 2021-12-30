import { Component, OnInit } from '@angular/core';

import { ArticoliService } from 'src/services/data/articoli.service';
import { IArticoli } from 'src/app/models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli$: IArticoli[]  = []
  errore : string = "";

  pagina : number = 1;
  righe : number = 10;

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoliService.getArticoliByDesc('Barilla').subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleResponse(response : any) {
    this.articoli$ = response;
  }

  handleError(error: Object) {
    this.errore = error.toString();
  }

}
