import {Component, OnInit} from '@angular/core';
import { Book } from '../book';
import {ActivatedRoute, Router} from "@angular/router";
import {BookLibraryService} from "../book-library.service";
import {Location} from "@angular/common";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private libraryService: BookLibraryService) {

  }

  customers: string[] = ["Jacek", "Franek", "Tomek"];
  show = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.libraryService.getBook(params['id'])
        .subscribe(book => this.book = book);
    })
  }

  getCustomer(id: number) {
    return this.customers[id-1];
  }

  rentBook(id: number) {

  }

  deleteBook(id: number) {
    this.libraryService.deleteBook(id)
      .subscribe(res => this.router.navigate(['/books']));
  }

  goBack() {
    this.location.back();
  }
}
