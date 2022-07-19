import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/Models/Articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoli: IArticoli[]  = [
    {codArt : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzCart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/farina00.jpg'},
    {codArt : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", pzCart : 30, peso : 0.5, prezzo : 1.3, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/mezzepenne.jpg'},
    {codArt : "014649001", descrizione : "BARILLA PANNE RIGATE 500 GR", um : "PZ", pzCart : 12, peso : 0.5, prezzo : 0.89, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/pasta.jpg'}

  ]
  constructor() { }

  getArticoli = () : IArticoli[] => this.articoli;

  getArticoliByCode = (codArt: string) : IArticoli => {
    const index = this.articoli.findIndex( articoli => articoli.codArt === codArt);
    return this.articoli[index];
}
}
