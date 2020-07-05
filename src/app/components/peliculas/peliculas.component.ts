import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula.model'
import {PeliculaService} from '../../services/peliculas.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {

    this.titulo = "componente pelicula tirulo"
    this.peliculas = this._peliculaService.getPeliculas()
    this.fecha = new Date(2020,8,12)
   }


  ngOnInit(): void {

    console.log(this._peliculaService.holaMundo()
      )
  }


  ngDoCheck(){

  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado"
  }

  ngOnDestroy(){

    console.log("se va a limiar el componente")
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
    console.log(this.favorita)
  }
}
