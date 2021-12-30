import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';

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

  filter$: Observable<string | null> = of("");
  filter: string | null = "";

  constructor(private articoliService: ArticoliService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.filter$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('filter')),
    );

    this.filter$.subscribe(param => (this.filter = param));

    if (this.filter) {
      this.getArticoli(this.filter);
    }

  }

  refresh = () => {
    if (this.filter) {
      this.getArticoli(this.filter);
    }
  }

  getArticoli = (filter : string) => {

    this.articoliService.getArticoliByDesc(filter).subscribe({
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
