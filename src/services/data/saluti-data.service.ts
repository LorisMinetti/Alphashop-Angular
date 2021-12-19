import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor() { }

  getSaluti = () : string => "Saluti dal servizio SalutiDataService";
}
