import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaEntidadComponent } from './entidad/lista-entidad/lista-entidad.component';
import { ListaDocumentoComponent } from './documento/lista-documento/lista-documento.component';
import { ListaContribuyenteComponent } from './contribuyente/lista-contribuyente/lista-contribuyente.component';
import { FormEntidadComponent } from './entidad/form-entidad/form-entidad.component';
import { FormDocumentoComponent } from './documento/form-documento/form-documento.component';
import { FormContribuyenteComponent } from './contribuyente/form-contribuyente/form-contribuyente.component';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
  {path:'',
  component: LayoutComponent,
  canActivate:[GuardGuard],
 children: [
    { path: 'entidad', component: ListaEntidadComponent },
    { path: 'documento', component: ListaDocumentoComponent },
    { path: 'contribuyente', component: ListaContribuyenteComponent },
    { path: 'entidad/nuevo', component: FormEntidadComponent },
    { path: 'entidad/:id', component: FormEntidadComponent },
    { path: 'documento/nuevo', component: FormDocumentoComponent },
    { path: 'documento/:id', component: FormDocumentoComponent },
    { path: 'contribuyente/nuevo', component: FormContribuyenteComponent },
    { path: 'contribuyente/:id', component:  FormContribuyenteComponent }
  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],//forChild change
  exports: [RouterModule]
})
export class AdminRoutingModule { }
