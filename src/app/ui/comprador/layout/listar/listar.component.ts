import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Chatarra, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  targets:Subasta[]=[]

  constructor(
    private subastaService:SubastaService,
    private router:Router,
    private cookieService:CookieSesionService,
    ) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.getCookieC()
    if (sesionCookie==""){
      this.router.navigate(['comprador'])
    }

    this.subastaService.ListarPorComprador(+sesionCookie).subscribe(
      (res)=>{
        this.targets=res.body
      }
    )

  }
}
