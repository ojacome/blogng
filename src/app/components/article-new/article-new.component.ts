import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ThrowStmt } from '@angular/compiler';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public page_title: string
  url_image: string;

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
    private _articleService: ArticleService
  ) { 
    this.article = new Article("", "", "", null, null);
    this.page_title = "Crear Artículo";
    this.url_image= `${Global.url}articles/get-image/`
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.article)

    this._articleService.create(this.article).subscribe(
      response =>{

        if(response.status=="success"){
          this.article = response.article;

          swal(
            "Articulo creado",
            "El articulo se ha creado correctamente",
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

}
