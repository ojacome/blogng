import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>;

  constructor() {

    this.titulo = "componente pelicula tirulo"
    this.peliculas = [
      {year: 2018, title: "Spiderman 4", image: 'https://i0.pngocean.com/files/203/497/288/spider-man-comic-book-clip-art-spiderman.jpg'},
      {year: 2019, title: "Los vengadores ", image: 'https://i0.pngocean.com/files/203/497/288/spider-man-comic-book-clip-art-spiderman.jpg'},
      {year: 2017, title: "supermamn ", image: 'https://as.com/meristation/imagenes/2020/05/28/noticias/1590658176_046742_1590658235_noticia_normal_recorte1.jpg'},
      {year: 2015, title: "tittacnic", image: 'https://as.com/meristation/imagenes/2020/05/28/noticias/1590658176_046742_1590658235_noticia_normal_recorte1.jpg'},
    ]
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
