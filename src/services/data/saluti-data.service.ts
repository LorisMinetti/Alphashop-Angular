import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient : HttpClient) { }

  getSaluti = (nome:string) : Observable<Object> => this.httpClient.get('http://localhost:8080/api/saluti/' + nome);
}
