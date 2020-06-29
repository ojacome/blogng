import {Component } from '@angular/core'


@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;


    constructor(){
        this.titulo = "hola mundo"
        this.comentario = "comentariio......."
        this.year = 2020

        console.log("compomente nuevo cargado")
    }
}