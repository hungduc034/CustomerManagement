import { Injectable } from '@angular/core';
import cusData from './customers.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(){
    return cusData;
  }
  constructor() { }
}

