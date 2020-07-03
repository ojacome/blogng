import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 

    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("xd")
    console.log(this.user);
  }

  hasDadoClick(){
    alert("has dado clic")
  }

  hasSalido(){
    alert("has salido")
  }

  hasPulsado(){
    alert( "ghas pulsado enter")
  }

}
