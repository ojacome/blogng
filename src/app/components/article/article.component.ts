import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article
  public url_image: string

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

    this.url_image= `${Global.url}articles/get-image/`
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this._articleService.getArticle(id).subscribe(
        response => {

          if(response.status =="success"){

            this.article = response.article;
          }else{

            alert(response.message)
            console.log(response.message)
            ;
          }
        },

        error => {
          alert(error.error.message)
          console.log(error)
          this._router.navigate(['/home'])
        }
      )

    })
  }

  delete(id){

    swal({
      title: "Seguro de eliminar el articulo?",
      text: "No podrás recuperar los datos!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {

        this._articleService.delete(id).subscribe(
          response => {
    
            if(response.status =="success"){
              swal("Articulo Eliminado!", {
                icon: "success",
              });
              // alert("El articulo ha sido eliminado")
              this._router.navigate(['/blog'])
            }
          },
          error =>{
    
            swal(error.error.message, {
              icon: "success",
            });
            // alert(error.error.message)
            console.log(error)
            this._router.navigate(['/blog'])        
          }
        )        

      }
    });


    
  }
}
