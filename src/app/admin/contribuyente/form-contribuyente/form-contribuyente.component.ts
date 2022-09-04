import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contribuyente } from '../shared/contribuyente.model';
import { ContribuyenteService } from '../shared/contribuyente.service';

@Component({
  selector: 'app-form-contribuyente',
  templateUrl: './form-contribuyente.component.html',
  styles: [
  ]
})
export class FormContribuyenteComponent implements OnInit {
  formulario!: FormGroup;
  errors = [];
  contribuyente?:Contribuyente;

  titulo: String = "Crear Tipo Contribuyente";
  estado:boolean=true;

  constructor(

    private contribuyenteService: ContribuyenteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    if (id) {

      this.titulo = "Editar Tipo Contribuyente";
      this.contribuyenteService.get(parseInt(id!))
        .subscribe(contribuyente => {
          this.contribuyente = contribuyente;
          this.formulario = this.formBuilder.group({
            nombre: [contribuyente.nombre, [Validators.required], []],
            estado: [contribuyente.estado, [Validators.required]]
          });
        })
    } else {
      //Validators.pattern('[a-z0-9-]+')
      this.formulario = this.formBuilder.group({

            nombre: [, [Validators.required], []],
            estado: [, [Validators.required]]
      });
    }
  }

  save() {

    this.formulario?.markAllAsTouched();
    if (this.formulario?.invalid) { return; }
    const values = this.formulario?.value;



    if (this.contribuyente) {
      this.contribuyenteService.update(this.contribuyente.idTipoContribuyente, values).subscribe(contribuyente=>{
        console.log("update");
        alert("Actualizado")
        this.router.navigate(['/admin/contribuyente']);

      })
    } else {
      this.contribuyenteService.create(values).subscribe(contribuyente=>{
        alert("Agregado")
        console.log("create");
        this.router.navigate(['/admin/contribuyente']);
      })
    }
  }
}
