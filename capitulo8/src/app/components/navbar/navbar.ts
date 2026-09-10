import { Component, inject } from '@angular/core';
import { Clock } from '../../services/clock';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [DatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  //obtienes la instancia del servicio cuando la necesites
  clockService=inject(Clock);


}
