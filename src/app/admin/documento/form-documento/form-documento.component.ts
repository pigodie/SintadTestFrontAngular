import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from '../shared/documento.model';
import { DocumentoService } from '../shared/documento.service';

@Component({
  selector: 'app-form-documento',
  templateUrl: './form-documento.component.html',
  styles: [
  ]
})
export class FormDocumentoComponent implements OnInit {



  formulario!: FormGroup;
  errors = [];
  documento?:Documento;

  titulo: String = "Crear Tipo Documento";
  estado:boolean=true;

  constructor(

    private documentoService: DocumentoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    if (id) {

      this.titulo = "Editar Tipo Documento";
      this.documentoService.get(parseInt(id!))
        .subscribe(documento => {
          this.documento = documento;
          this.formulario = this.formBuilder.group({
            codigo: [documento.codigo, [Validators.required], []],
            descripcion: [documento.descripcion, [Validators.required], []],
            nombre: [documento.nombre, [Validators.required], []],
            estado: [documento.estado, [Validators.required]]
          });
        })
    } else {
      //Validators.pattern('[a-z0-9-]+')
      this.formulario = this.formBuilder.group({
        codigo: [, [Validators.required], []],
            descripcion: [, [Validators.required], []],
            nombre: [, [Validators.required], []],
            estado: [, [Validators.required]]
      });
    }
  }

  save() {

    this.formulario?.markAllAsTouched();
    if (this.formulario?.invalid) { return; }
    const values = this.formulario?.value;



    if (this.documento) {
      this.documentoService.update(this.documento.idTipoDocumento, values).subscribe(documento=>{
        console.log("update");
        alert("Actualizado")
        this.router.navigate(['/admin/documento']);

      })
    } else {
      this.documentoService.create(values).subscribe(documento=>{
        alert("Agregado")
        console.log("create");
        this.router.navigate(['/admin/documento']);
      })
    }
  }






}

