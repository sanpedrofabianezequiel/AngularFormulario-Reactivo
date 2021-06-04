# FormularioReactivos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## Pasos necesarios
1-En el app.Module.ts
import{ FormsModule,ReactiveFormsModule } from"@angular/forms";
en el imports :[
       FormsModule,ReactiveFormsModule
]
2-<form [formGroup]="miFormulario" (submit)="onSubmit(miFormulario)">
<input type="text" formControlName="apellido">
3-Trabajamos en el componente de la clase de la vista
4-Importamos import { FormGroup,Validators,FormBuilder } from "@angular/forms";
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





5- En consola vemos podemos poner en la vista esta estructura
 nombreformulario => control => nombre campo => propiedad
 ## Se va mostrar siempre y cuando tenga errores almacenados en esa propiedad, por el validador
 for example =>formControlName="nombre"
    <div class="errorCss" *ngIf="miFormulario.controls.nombre.errors"> 
             el campo contiene un error
     </div>

