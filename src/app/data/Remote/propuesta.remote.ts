import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  private apiBase: string=environment.apiOrquestador;
  constructor(private http:HttpClient) { }
  
  ObtenerMayor(idSubasta:number){
    return this.http.get(`${this.apiBase}/propuesta/mayor/${idSubasta}`)
  }

}
