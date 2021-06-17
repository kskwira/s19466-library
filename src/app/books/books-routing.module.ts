import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent} from "./books-list/books-list.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {DashboardComponent} from "../dashboard.component";

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
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
