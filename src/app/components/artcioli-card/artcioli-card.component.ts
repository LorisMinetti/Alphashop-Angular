import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticoli } from 'src/app/Models/Articoli';



@Component({
  selector: 'app-artcioli-card',
  templateUrl: './artcioli-card.component.html',
  styleUrls: ['./artcioli-card.component.css']
})
export class ArtcioliCardComponent implements OnInit {


  constructor() { }

  @Input()
  articolo: IArticoli = {
    codArt:'',
    descrizione: '',
    um: '',
    pzCart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: ''
  }

  @Output()
  delete = new EventEmitter();
  @Output()
  edit = new EventEmitter();

  ngOnInit(): void {
  }

  editArt = () => this.edit.emit(this.articolo.codArt);

  delArt = () => this.delete.emit(this.articolo.codArt);

}
