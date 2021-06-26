import {Component, OnInit} from '@angular/core';
import { Book } from '../book';
import {ActivatedRoute, Router} from "@angular/router";
import {BookLibraryService} from "../book-library.service";
import {Location} from "@angular/common";
import {Customer} from "../customer";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;
  customerss?: Customer[];
  show = false;

  customers  = [
    {id: 1, name: "Jacek"},
    {id: 2, name: "Franek"},
    {id: 3, name: "Tomek"},
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private libraryService: BookLibraryService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.libraryService.getBook(params['id'])
        .subscribe(book => this.book = book);
    })
  }

  getCustomer(id: number) {
    return this.customers[id-1].name;
  }

  toNumber(value: string) {
    return Number(value);
  }

  rentBook(customerId: number, book: Book) {
    book.rentedById = customerId;
    book.isRented = true;
    this.libraryService.rentBook(book)
      .subscribe(res => this.router.navigate(['/books']))
  }

  returnBook(bookId: number, book: Book) {
    book.rentedById = 0
    book.isRented = false;
    this.libraryService.rentBook(book)
      .subscribe(res => this.router.navigate(['/books']))
  }

  deleteBook(id: number) {
    this.libraryService.deleteBook(id)
      .subscribe(res => this.router.navigate(['/books']));
  }

  goBack() {
    this.location.back();
  }
}
