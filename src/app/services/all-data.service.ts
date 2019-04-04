import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { CommentService } from './comment.service';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  constructor(private articleService: ArticleService, private commentService: CommentService) { }

  allComments;
  allArticles;
  returnArticle;
  returnComment;




  //Comment section:---

  getAllComments() {
    const ob = this.commentService.getAllComments();
    ob.subscribe(comments => {
      this.allComments = comments
    })
    //Waiting for the asynch req to finish so I get the comments
    setTimeout(() => {
      return this.allComments
    }, 0);
  }

  deleteComment(commentId) {
    const ob = this.commentService.removeComment(commentId);
    ob.subscribe();
  }

  updateComment(comment) {
    const ob = this.commentService.updateComment(comment);
    ob.subscribe();
  }

  createComment(comment) {
    const ob = this.commentService.createComment(comment);
    ob.subscribe();
  }

  //End of comment -----------


  //Article Section -----------


  getAllArticles() {
    const ob = this.articleService.getAllArticles();
    ob.subscribe(articles => { this.allArticles = articles })
    setTimeout(() => {
      return this.allArticles;
    }, 0);
  }

  getArticle(articleId) {
    const ob = this.articleService.getArticle(articleId);
    ob.subscribe(article => { this.returnArticle = article })
  }

  removeArticle(articleId) {
    const ob = this.articleService.removeArticle(articleId);
    ob.subscribe();
  }

  updateArticle(article) {
    const ob = this.articleService.updateArticle(article);
    ob.subscribe();
  }

  createArticle(article) {
    const ob = this.articleService.createArticle(article)
    ob.subscribe();
  }
}
