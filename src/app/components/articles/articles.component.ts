import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[]

  public url_image: string;

  constructor() {
    this.url_image= `${Global.url}articles/get-image/`
   }

  ngOnInit(): void {
  }

}
