import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public is_edit: boolean;
  public page_title: string
  public url_image: string;

  afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg,.png,.jpeg",
      maxSize: "50",
      uploadAPI:  {
        url:`${Global.url}articles/upload-image/`,        
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube tu imagen para el articulo...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
    };
    
    
  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.article = new Article("", "", "", null, null);
    this.is_edit = true;
    this.page_title = "Editar Artículo",
    this.url_image= `${Global.url}articles/get-image/`
  }
  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(){
    
    console.log(this.article)

    this._articleService.update(this.article._id, this.article).subscribe(
      response =>{

        if(response.status=="success"){
          this.article = response.article;

          swal(
            "Articulo editado",
            "El articulo se ha guardado correctamente",
            "success"
          )
          // alert("articulo guardado con exito")
          console.log(response)
        }        
      },
      error =>{
        swal(
          "Error",
          "error.error.message",
          "error"
        )
        // alert(error.error.message)
        console.log(error)
      }
    )
  }

  imageUpload(data){    
    let image_data = JSON.parse(JSON.stringify( data.body));
    // alert(image_data.image)
    this.article.image = image_data.image;
  }

  getArticle(){
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
}
