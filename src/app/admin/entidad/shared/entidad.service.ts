import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entidad } from './entidad.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  apiBase = environment.apiBase;
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Entidad[]>{

    return this.httpClient.get<Entidad[]>(`${this.apiBase}/admin/entidad/listar`);
   }
   get(id:number):Observable<Entidad>{
    return this.httpClient.get<Entidad>(`${this.apiBase}/admin/entidad/${id}`);
   }
   create(entidad: Entidad):Observable<Entidad>{
    return this.httpClient.post<Entidad>(`${this.apiBase}/admin/entidad`,entidad);
   }
   update(id:number, entidad : Entidad):Observable<Entidad>{
    return this.httpClient.put<Entidad>(`${this.apiBase}/admin/entidad/${id}`,entidad)
   }
}
