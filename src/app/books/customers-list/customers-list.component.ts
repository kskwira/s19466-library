import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {BookLibraryService} from "../book-library.service";
import {Book} from "../book";

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customersList: Customer[] = [];
  booksList: Book[] = [];

  constructor(private libraryService: BookLibraryService) {
  }

  ngOnInit() {
    this.getCustomersList();
    this.getBooksList();
  }

  getCustomersList() {
    this.libraryService.getCustomers()
      .subscribe(customers => this.customersList = customers);
  }

  getBooksList() {
    this.libraryService.getBooks()
      .subscribe(books => this.booksList = books);
  }

  returnBook(customer: Customer, book: Book) {
    book.rentedById = 0
    book.isRented = false;
    customer.booksRentedId.forEach((element, index) => {if (element == book.id)
      customer.booksRentedId.splice(index, 1)});
    this.libraryService.rentCustomer(customer)
      .subscribe(() => this.libraryService.rentBook(book)
        .subscribe(() => location.reload()));
  }

}
