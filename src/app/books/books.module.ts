import {NgModule} from "@angular/core";
import {BooksListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BooksRoutingModule} from "./books-routing.module";
import {BookLibraryService} from "./book-library.service";

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksRoutingModule
  ],
  providers: [BookLibraryService]
})
export class BooksModule { }
