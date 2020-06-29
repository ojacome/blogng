import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {

    this.titulo = "componente pelicula tirulo"
    console.log("construcctor peliculas")
   }


  ngOnInit(): void {

    console.log("envento init")
  }


  ngDoCheck(){

    console.log("envento docheck")
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado"
  }

  ngOnDestroy(){

    console.log("se va a limiar el componente")
  }
}
