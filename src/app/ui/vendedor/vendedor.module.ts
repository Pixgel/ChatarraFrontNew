import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { SubastaComponent } from './subasta/subasta.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { TargetsComponent } from './layout/listar/targets/targets.component';


@NgModule({
  declarations: [
    SubastaComponent,
    LayoutComponent,
    ListarComponent,
    HistorialComponent,
    TargetsComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
