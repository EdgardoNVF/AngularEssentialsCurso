import { Component, signal, WritableSignal } from '@angular/core';


export interface Curso{
    name:string;
    duracion:string;
    tecnologias:string[];
}

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {

  cursos:WritableSignal<Curso[]> = signal([
    {name:"Angular",duracion:"5 días", tecnologias:["HTML","CSS","Javascript"]},
    {name:"Java Essentials", duracion:"5 días", tecnologias:["java"]}
  ]);
}
