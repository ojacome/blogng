import{ Injectable} from '@angular/core';
import{ Pelicula} from '../models/pelicula.model';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[]

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2018, "https://i0.pngocean.com/files/203/497/288/spider-man-comic-book-clip-art-spiderman.jpg" ),      
            new Pelicula(  "Los vengadores ", 2019, 'https://i0.pngocean.com/files/203/497/288/spider-man-comic-book-clip-art-spiderman.jpg'),
            new Pelicula(  "supermamn ",  2017, 'https://as.com/meristation/imagenes/2020/05/28/noticias/1590658176_046742_1590658235_noticia_normal_recorte1.jpg'),
            new Pelicula(  "tittacnic", 2015, 'https://as.com/meristation/imagenes/2020/05/28/noticias/1590658176_046742_1590658235_noticia_normal_recorte1.jpg'),
          ];
    }
    holaMundo(){
        return "Hola mundo desde el servicio"
    }

    getPeliculas(){
        return this.peliculas
    }
}