import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contribuyente } from './contribuyente.model';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  apiBase = environment.apiBase;
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Contribuyente[]>{
    return this.httpClient.get<Contribuyente[]>(`${this.apiBase}/admin/contribuyente/listar`);
   }
   get(id:number):Observable<Contribuyente>{
    return this.httpClient.get<Contribuyente>(`${this.apiBase}/admin/contribuyente/${id}`);
   }
   create(contribuyente: Contribuyente):Observable<Contribuyente>{
    return this.httpClient.post<Contribuyente>(`${this.apiBase}/admin/contribuyente`,contribuyente);
   }
   update(id:number, contribuyente : Contribuyente):Observable<Contribuyente>{
    return this.httpClient.put<Contribuyente>(`${this.apiBase}/admin/contribuyente/${id}`,contribuyente);
   }
}
