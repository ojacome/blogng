import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public urlImage: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.urlImage =  `${_articleService.url_articles}/get-image/`
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      response => {

        if(response.status ==="success"){

          console.log(response.articles)
          this.articles = response.articles;

        }else{

          console.log(response.message)
        }
      },
      error =>{
        console.log(error)
      }
    )
  }

}
