import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miFormulario :FormGroup;
  
  constructor(private frmBuilder : FormBuilder){
    this.miFormulario = this.frmBuilder.group({
      //Recibe un objeto de controles, y validaciones
      nombre:["Nombre por defecto",Validators.required],
      apellido:["Apellido por defecto",Validators.required],
      email:["ezequiel@gmail.com",[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]]
    });
  }
  title = 'FormularioReactivos';
  onSubmit(param:any){
    console.log(param);//Mostramos todo el objeto FORMULARIO
  }
}
