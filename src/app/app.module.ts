import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import {BookLibraryService} from "./books/book-library.service";
import {BookDetailsComponent} from "./books/book-details/book-details.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent} from "./books/books-list/books-list.component";
import {NewBookComponent} from "./books/new-book/new-book.component";
import {AboutComponent} from "./about.component";
import {DashboardComponent} from "./dashboard.component";


const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
