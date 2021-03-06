import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent} from "./books-list/books-list.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {CustomersListComponent} from "./customers-list/customers-list.component";

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'customers', component: CustomersListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }
