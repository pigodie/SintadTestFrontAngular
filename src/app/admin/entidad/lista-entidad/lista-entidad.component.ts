import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entidad } from '../shared/entidad.model';
import { EntidadService } from '../shared/entidad.service';

@Component({
  selector: 'app-lista-entidad',
  templateUrl: './lista-entidad.component.html',
  styles: [
  ]
})
export class ListaEntidadComponent implements OnInit {

  entidad?: Entidad[];
displayedColumns: string[] = ['documento', 'nroDocumento','razonSocial','nombreComercial','contribuyente','direccion','telefono','estado','idEntidad'];
dataSource = new MatTableDataSource<Entidad>([]);
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(private entidadService:EntidadService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.entidadService.getAll().subscribe(entidad=>{
      this.fillTable(entidad);
    })

  }

  fillTable(entidad: Entidad[]) {
    this.dataSource = new MatTableDataSource<Entidad>(entidad);
    this.dataSource.paginator = this.paginator;
  }

}
