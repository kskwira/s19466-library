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
  customersList: Customer[] = [];
  show = false;

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
    this.libraryService.getCustomers()
      .subscribe(customers => this.customersList = customers);
  }

  getCustomerName(id: number) {
    return this.customersList[id-1].name;
  }

  getCustomerId(id: number) {
    return this.customersList[id-1].id;
  }

  toNumber(value: string) {
    return Number(value);
  }

  rentBook(customer: Customer, book: Book) {
    book.rentedById = customer.id;
    book.isRented = true;
    customer.booksRentedId = book.id;
    this.libraryService.rentCustomer(customer)
      .subscribe(() => this.libraryService.rentBook(book)
        .subscribe(() => this.router.navigate(['/books'])));
  }

  returnBook(customer: Customer, book: Book) {
    book.rentedById = 0
    book.isRented = false;
    customer.booksRentedId = 0;
    this.libraryService.rentCustomer(customer)
      .subscribe(() => this.libraryService.rentBook(book)
        .subscribe(() => this.router.navigate(['/books'])));
  }

  deleteBook(id: number) {
    this.libraryService.deleteBook(id)
      .subscribe(() => this.router.navigate(['/books']));
  }

  goBack() {
    this.location.back();
  }
}
