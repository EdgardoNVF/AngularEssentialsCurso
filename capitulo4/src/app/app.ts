import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './model/entities';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  student:Student={
    name:"Edgardo",
    profession:"developer",
    about:"ingeniero en sistemas con especialidad en IA",
    email:"edgardo.velasco@netec.com"
  };

  changeAbout(){
    this.student.about="Nuevo dato después de pulsar botón";
  }

}
