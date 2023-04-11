import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Requisito } from '../models/requisito';

@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  url: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getRequisitos() {
    return this.http.get<Requisito[]>(`${this.url}/Requisitos`);
  }
}
