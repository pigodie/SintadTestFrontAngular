import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contribuyente } from '../shared/contribuyente.model';
import { ContribuyenteService } from '../shared/contribuyente.service';

@Component({
  selector: 'app-lista-contribuyente',
  templateUrl: './lista-contribuyente.component.html',
  styles: [
  ]
})
export class ListaContribuyenteComponent implements OnInit {

  contribuyente?: Contribuyente[];
displayedColumns: string[] = ['nombre','estado','idTipoContribuyente'];
dataSource = new MatTableDataSource<Contribuyente>([]);
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(private contribuyenteService:ContribuyenteService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.contribuyenteService.getAll().subscribe(contribuyente=>{
      this.fillTable(contribuyente);
    })

  }

  fillTable(contribuyente: Contribuyente[]) {
    this.dataSource = new MatTableDataSource<Contribuyente>(contribuyente);
    this.dataSource.paginator = this.paginator;
  }

}


