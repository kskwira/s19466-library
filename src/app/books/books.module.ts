import {NgModule} from "@angular/core";
import {BooksListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BooksRoutingModule} from "./books-routing.module";
import {BookLibraryService} from "./book-library.service";
import { BookFilterPipe } from './book-filter.pipe';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {CustomerFilterPipe} from "./customer-filter.pipe";

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    BookFilterPipe,
    CustomersListComponent,
    CustomerFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksRoutingModule,
    FormsModule
  ],
  providers: [BookLibraryService]
})
export class BooksModule { }
