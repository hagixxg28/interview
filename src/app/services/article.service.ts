import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';
import { Article } from '../models/article';
;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }



  Url = "http://localhost:8080/myInterview/rest/article/"
  //---------------
  //General coupons
  public getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.Url);
  }
  public getArticle(ArticleId: number): Observable<Article> {
    return this.http.get<Article>(this.Url + ArticleId);
  }

  public createArticle(article: Article) {

    return this.http.post(this.Url, article)
  }

  public updateArticle(article: Article) {
    return this.http.put(this.Url, article)
  }

  public removeArticle(ArticleId: number) {
    return this.http.delete(this.Url + ArticleId)
  }
}
