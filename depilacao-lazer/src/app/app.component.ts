import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // <-- IMPORTANTE!

@Component({
  selector: 'app-root',
  standalone: true, // se estiver usando standalone (Angular 17+)
  imports: [NgIf],  // <-- Aqui está o segredo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarAvulsos = false;
  mostrarPacotes = false;
  mostrarCombos = false;
}


