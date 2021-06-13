import { Component } from '@angular/core';
import {Book} from "./book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's19466-library';

  booksList: Book[] = [];

  constructor(private http: HttpClient){}

  getBooksData() {
    this.http.get('http://localhost:4567/books')
      .subscribe(res => this.booksList = res as Book[]);
  }
}
