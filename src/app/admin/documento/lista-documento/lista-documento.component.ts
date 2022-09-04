import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Documento } from '../shared/documento.model';
import { DocumentoService } from '../shared/documento.service';

@Component({
  selector: 'app-lista-documento',
  templateUrl: './lista-documento.component.html',
  styles: [
  ]
})
export class ListaDocumentoComponent implements OnInit {

  documento?: Documento[];
displayedColumns: string[] = ['codigo','nombre','descripcion','estado','idTipoDocumento'];
dataSource = new MatTableDataSource<Documento>([]);
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(private documentoService:DocumentoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.documentoService.getAll().subscribe(documento=>{
      this.fillTable(documento);
    })

  }

  fillTable(documento: Documento[]) {
    this.dataSource = new MatTableDataSource<Documento>(documento);
    this.dataSource.paginator = this.paginator;
  }

}




