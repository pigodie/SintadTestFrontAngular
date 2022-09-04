import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Documento } from './documento.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  apiBase = environment.apiBase;
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Documento[]>{
    return this.httpClient.get<Documento[]>(`${this.apiBase}/admin/documento/listar`);
   }
   get(id:number):Observable<Documento>{
    return this.httpClient.get<Documento>(`${this.apiBase}/admin/documento/${id}`);
   }
   create(documento: Documento):Observable<Documento>{
    return this.httpClient.post<Documento>(`${this.apiBase}/admin/documento`,documento);
   }
   update(id:number, documento : Documento):Observable<Documento>{
    return this.httpClient.put<Documento>(`${this.apiBase}/admin/documento/${id}`,documento);
   }
}
