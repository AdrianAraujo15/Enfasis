import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Persona } from './modelo/persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'persona';

  personaArray: Persona[] =[
    {id: 1, nombre: "Adrian", edad: 20 },
    {id: 2, nombre: "Natalia", edad: 24},
    {id: 3, nombre: "Johan", edad: 17 },
  ];

  seleccionPersona: Persona = new Persona();

  editar(persona: Persona){
    this.seleccionPersona = persona;
  }

  agregar_editar(){
    if (this.seleccionPersona.id == 0) {
      this.seleccionPersona.id = this.personaArray.length + 1;
      this.personaArray.push(this.seleccionPersona);
    }
    this.seleccionPersona = new Persona();  
  }

  borrar() {
    this.personaArray = this.personaArray.filter(elemento => elemento != this.seleccionPersona);
    this.seleccionPersona = new Persona();
  }

}


