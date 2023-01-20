import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    menj: boolean | undefined;

    constructor(private formBuilder: FormBuilder){}


    contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['',Validators.required],
      pais: ['', Validators.required],
      mensaje: ['', Validators.required]
    })

    get nombre(){return this.contactoForm.get('nombre')}
    get email(){return this.contactoForm.get('email')}
    get telefono(){return this.contactoForm.get('telefono')}
    get pais(){return this.contactoForm.get('pais')}
    get mensaje(){return this.contactoForm.get('mensaje')}


    datos = new Array;
    onSubmit(){
      if(!this.contactoForm.valid){
        alert('Alguna validacion no se cumple')
        return;
      }
      this.datos.push({
        'Nombre': this.contactoForm.get('nombre')?.value,
        'Email':this.contactoForm.get('email')?.value,
        'Telefono':this.contactoForm.get('telefono')?.value,
        'Pais':this.contactoForm.get('pais')?.value,
        'Mensaje':this.contactoForm.get('mensaje')?.value,
      })
      console.log(this.datos)
      this.menj = true
    }
    Refrescar(){
      location.reload();
}

}
