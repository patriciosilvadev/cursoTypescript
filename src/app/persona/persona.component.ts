import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
   addPersona: any = {
     nombre: '',
     apellido: '',
     suerte: ''
   }
   personas: any;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }
  eliminarPersona(id){
    console.log('eliminar eprsona');
  }
  agregarPersona(){
    console.log('add persona');
    }
}
