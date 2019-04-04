import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/myInterview/rest/comment/"
  //---------------
  //General coupons
  public getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.Url);
  }
  public getComment(CommentId: number): Observable<Comment> {
    return this.http.get<Comment>(this.Url + CommentId);
  }

  public createComment(comment: Comment) {
    return this.http.post(this.Url, comment)
  }

  public updateComment(comment: Comment) {
    return this.http.put(this.Url, comment)
  }

  public removeComment(CommentId: number) {
    return this.http.delete(this.Url + CommentId)
  }
}
