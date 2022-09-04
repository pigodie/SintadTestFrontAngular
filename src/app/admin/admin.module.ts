import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ListaEntidadComponent } from './entidad/lista-entidad/lista-entidad.component';
import { FormEntidadComponent } from './entidad/form-entidad/form-entidad.component';
import { FormDocumentoComponent } from './documento/form-documento/form-documento.component';
import { ListaDocumentoComponent } from './documento/lista-documento/lista-documento.component';
import { ListaContribuyenteComponent } from './contribuyente/lista-contribuyente/lista-contribuyente.component';
import { FormContribuyenteComponent } from './contribuyente/form-contribuyente/form-contribuyente.component';
import { HttpClientModule } from '@angular/common/http';
import { EstadoPipe } from './shared/estado.pipe';




@NgModule({
  declarations: [
    LayoutComponent,
    ListaEntidadComponent,
    FormEntidadComponent,
    FormDocumentoComponent,
    ListaDocumentoComponent,
    ListaContribuyenteComponent,
    FormContribuyenteComponent,
    EstadoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class AdminModule { }
