import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[]

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  

  ngOnInit(): void {

    this._route.params.subscribe(params=>{
      var search = params['search'];

      this._articleService.search(search).subscribe(

        response =>{

          // console.log(response)
          if(response.status=="success"){

            this.articles = response.articles;
            
          }
        },

        error => {

          alert(error.error.message)
          console.log(error)
          this.articles = [];
        }
      )
    })
  }

}
