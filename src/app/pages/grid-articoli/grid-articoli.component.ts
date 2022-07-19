import { Component, OnInit } from '@angular/core';
import { ArtcioliCardComponent } from 'src/app/components/artcioli-card/artcioli-card.component';
import { IArticoli } from 'src/app/Models/Articoli';
import { ArticoliService } from 'src/services/articoli.service';


@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {

    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);

  }

  handleEdit = (codArt : string) => {
    console.log("Cliccato tasto modifica del codice "+ codArt);
  }

  handleDelete = (codArt: string) => {
    console.log("Cliccato tasto elimina del codice "+codArt);

    /*  Così elimino proprio l'articolo*/
    this.articoli$.splice(this.articoli$.findIndex(x => x.codArt === codArt ), 1);
    console.log(this.articoli$);

  }
}
