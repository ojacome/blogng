import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  
  public articles: Article[]

  constructor(
    public _articleService: ArticleService
  ) { 
    this.title = "Ultimos articulos"
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
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
