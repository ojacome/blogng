import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Article} from '../models/article.model'
import { Global } from './global';

@Injectable()
export class ArticleService{


    
    public url_articles: string;

    constructor(
        private _http: HttpClient
    ){

        this.url_articles= `${Global.url}articles`
    }

    pruebas(){
        return "soy el servicio de articulos"
    }

    getArticles(last:any = null): Observable<any>{

        if(last != null){
            this.url_articles= `${this.url_articles}/true`
        }
        return this._http.get(this.url_articles);
    }

    getArticle(articleId: any): Observable<any>{
        return this._http.get(`${this.url_articles}/article/${articleId}`)
    }

    search(searchString: any): Observable<any>{

        return this._http.get(`${this.url_articles}/search/${searchString}`)
    }
}