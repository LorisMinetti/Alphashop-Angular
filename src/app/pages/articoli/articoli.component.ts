import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../Models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli: IArticoli[] = [
    {codArt : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzCart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date()},
    {codArt : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", pzCart : 30, peso : 0.5, prezzo : 1.3, active : true, data : new Date()},
    {codArt : "007686402", descrizione : "FINDUS FIOR DI NASELLO 300 GR", um : "PZ", pzCart : 8, peso : 0.3, prezzo : 6.46, active : true, data : new Date()},
    {codArt : "057549001", descrizione : "FINDUS CROCCOLE 400 GR", um : "PZ", pzCart : 12, peso : 0.4, prezzo : 5.97, active : true, data : new Date()}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
