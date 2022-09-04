import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from './auth.model';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiBase = environment.apiBase;
  constructor(private httpClient: HttpClient) { }

  login(credentials:Credentials):Observable<Usuario>{
    return this.httpClient.post<Usuario>(environment.loginUrl, credentials)
   }

}
