import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { Article } from 'src/app/models/article';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private allData: AllDataService) { }

  allArticles: Article[];

  newArticle = new Article();

  newComment = new Comment();

  currentArticle = new Article(undefined, "", "");

  modalDisplay = "none";

  ngOnInit() {
    this.renderArticles();

  }

  postArticle() {
    console.log(this.newArticle);
    this.allData.createArticle(this.newArticle);
    setTimeout(() => {
      this.renderArticles();
    }, 200);
  }

  renderArticles() {
    this.allData.getAllArticles();
    setTimeout(() => {
      this.allArticles = this.allData.allArticles; console.log(this.allArticles);
    }, 200);
  }

  renderComments(index) {
    this.allData.getArticle(this.allArticles[index].id);
    this.allArticles[index] = this.allData.returnArticle;
  }

  remove(index) {
    console.log("removing number: " + index)
    let articleToRemove = this.allArticles[index];
    this.allData.removeArticle(articleToRemove.id);
    setTimeout(() => {
      this.renderArticles();
    }, 100);

  }

  openEdit(index) {
    console.log("editing " + index)
    this.showModal()
    this.currentArticle.id = this.allArticles[index].id;
    this.currentArticle.title = this.allArticles[index].title;
    this.currentArticle.body = this.allArticles[index].body;
  }

  hideModal() {
    this.modalDisplay = "none";
  }

  showModal() {
    this.modalDisplay = "block";
  }

  saveChanges() {
    this.allData.updateArticle(this.currentArticle);
    this.hideModal();
    setTimeout(() => {
      this.renderArticles();
    }, 100);
  }

  toggleComments(index) {

    if (!this.allArticles[index].showComments) {
      console.log('showing comments')
      console.log(this.allArticles[index])
      this.allArticles[index].showComments = true;
      return;
    }
    this.allArticles[index].showComments = false;
  }

  postComment(index) {

    this.newComment.article_id = this.allArticles[index].id;
    console.log(this.newComment)
    this.allData.createComment(this.newComment)
    setTimeout(() => {
      this.renderArticles();
    }, 100);


  }

}
