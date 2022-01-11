import { Component, OnInit } from '@angular/core';
import { IArticoli, ICat, IIva } from 'src/app/models/Articoli';

import { ActivatedRoute } from '@angular/router';
import { ArticoliService } from 'src/services/data/articoli.service';

@Component({
  selector: 'app-gestart',
  templateUrl: './gestart.component.html',
  styleUrls: ['./gestart.component.css']
})
export class GestartComponent implements OnInit {

  title : string = "Modifica Articoli";

  CodArt: string = '';
  articolo: IArticoli = {
    codArt: '',
    descrizione: '',
    um: '',
    codStat: '',
    pzCart: 0,
    pesoNetto: 0,
    prezzo: 0,
    idStatoArt: '1',
    desStatoArt: '',
    dataCreazione: new Date(),
    imageUrl: '',
    idIva: -1,
    idFamAss: -1,
    ean: []
  };

  Iva: IIva[] = [];
  Cat: ICat[] = [];

  ean: string = "";

  constructor(private route: ActivatedRoute, private articoliService: ArticoliService) { }

  ngOnInit(): void {

    this.CodArt =  this.route.snapshot.params['codart'];
    console.log("Selezionato articolo " + this.CodArt);

    this.articoliService.getArticoliByCode(this.CodArt).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });

    this.articoliService.getIva().subscribe(
      response => {
        this.Iva = response;
        console.log(response);
      }
    )

    this.articoliService.getCat().subscribe(
      response => {

        this.Cat = response;
        console.log(response);
      }
    )


  }

  handleResponse(response : any) {
    this.articolo = response;

    this.ean = (this.articolo.ean) ? this.articolo.ean[0].barcode : "";

    console.log(this.articolo);
  }

  handleError(error: any) {
    console.log(error);
  }

  salva = () => {
    console.log(this.articolo);

    this.articoliService.updArticolo(this.articolo).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
