import {Component, OnInit} from '@angular/core';
import {Book} from "./book";
import {BookLibraryService} from "./book-library.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 's19466-library';
  booksList: Book[] = [];
  selectedBook?: Book;

  constructor(private bookLibraryService: BookLibraryService){}

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.bookLibraryService.getBooks()
      .subscribe(books => this.booksList = books);
  }

  getBookDetails(id: number) {

    this.bookLibraryService.getBook(id)
      .subscribe(book => this.selectedBook = book);
  }

  deleteBook(id: number) {
    this.bookLibraryService.deleteBook(id)
      .subscribe(res => {
        console.log(res);
        this.booksList = this.booksList
          .filter(book => book.id !== id);
        if (this.selectedBook?.id === id) {
          delete(this.selectedBook);
        }
      });
  }
}
