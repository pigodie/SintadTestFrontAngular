import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contribuyente } from '../../contribuyente/shared/contribuyente.model';
import { ContribuyenteService } from '../../contribuyente/shared/contribuyente.service';
import { ListaDocumentoComponent } from '../../documento/lista-documento/lista-documento.component';
import { Documento } from '../../documento/shared/documento.model';
import { DocumentoService } from '../../documento/shared/documento.service';
import { Entidad } from '../shared/entidad.model';
import { EntidadService } from '../shared/entidad.service';

@Component({
  selector: 'app-form-entidad',
  templateUrl: './form-entidad.component.html',
  styles: [
  ]
})
export class FormEntidadComponent implements OnInit {

  formulario!: FormGroup;
  errors = [];
  documentos?:Documento[];
  contribuyentes?:Contribuyente[];
  entidad?: Entidad;
  titulo: String = "Crear Entidad";
  estado:boolean=true;

  constructor(
    private contribuyenteService: ContribuyenteService,
    private documentoService: DocumentoService,
    private entidadService: EntidadService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContribuyentes();
    this.getDocumentos();
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    if (id) {

      this.titulo = "Editar Entidad";
      this.entidadService.get(parseInt(id!))
        .subscribe(entidad => {
          this.entidad = entidad;
          this.formulario = this.formBuilder.group({
            documento: [entidad.documento, [Validators.required], []],
            nroDocumento: [entidad.nroDocumento, [Validators.required], []],
            razonSocial: [entidad.razonSocial, [Validators.required], []],
            nombreComercial: [entidad.nombreComercial, [Validators.required], []],
            contribuyente: [entidad.contribuyente, [Validators.required]],
            direccion: [entidad.direccion, [Validators.required]],
            telefono: [entidad.telefono, [Validators.required]],
            estado: [entidad.estado, [Validators.required]]
          });
        })
    } else {
      //Validators.pattern('[a-z0-9-]+')
      this.formulario = this.formBuilder.group({
        documento: [, [Validators.required], []],
        nroDocumento: [, [Validators.required], []],
        razonSocial: [, [Validators.required], []],
        nombreComercial: [, [Validators.required], []],
        contribuyente: [, [Validators.required]],
        direccion: [, [Validators.required]],
        telefono: [, [Validators.required]],
        estado: [, [Validators.required]]
      });
    }
  }

  save() {

    this.formulario?.markAllAsTouched();
    if (this.formulario?.invalid) { return; }
    const values = this.formulario?.value;



    if (this.entidad) {
      this.entidadService.update(this.entidad.idEntidad, values).subscribe(entidad=>{
        console.log("update");
        alert("Actualizado")
        this.router.navigate(['/admin/entidad']);

      })
    } else {
      this.entidadService.create(values).subscribe(entidad=>{
        alert("Agregado")
        console.log("create");
        this.router.navigate(['/admin/entidad']);
      })
    }
  }
  getDocumentos(){
    this.documentoService.getAll().subscribe(documento=>{
      this.documentos = documento;
    })
  }
  getContribuyentes(){
    this.contribuyenteService.getAll().subscribe(contribuyentes=>{
      this.contribuyentes = contribuyentes;
    })
  }





}
