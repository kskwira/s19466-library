import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookLibraryService } from "../book-library.service";

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksList: Book[] = [];
  searchText: string = '';

  constructor(private libraryService: BookLibraryService) {
  }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.libraryService.getBooks()
      .subscribe(books => this.booksList = books);
  }

}
