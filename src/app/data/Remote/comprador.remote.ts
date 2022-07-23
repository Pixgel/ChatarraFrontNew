import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  private apiBase: string=environment.apiOrquestador;
  constructor(private http:HttpClient) { }

  public loginComprador(comprador: Comprador){
    return this.http.post(`${this.apiBase}/comprador/login`,comprador)
  }

  public registerComprador(comprador:Comprador){
    return this.http.post(`${this.apiBase}/comprador/resgister`,comprador)
  }
}
