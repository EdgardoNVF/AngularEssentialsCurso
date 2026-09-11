import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cursos } from './components/cursos/cursos';
import { About } from './components/about/about';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  //ruta principal / -> Home
  {path:'', component: Home},
  
  // /cursos->Cursos
  {path:'cursos', component:Cursos},
  {path:'about', component: About},
  {path:'**', component:Notfound}
];
