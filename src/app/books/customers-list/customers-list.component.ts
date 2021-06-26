import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {BookLibraryService} from "../book-library.service";

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customersList: Customer[] = [];

  constructor(private libraryService: BookLibraryService) {
  }

  ngOnInit(): void {
    this.getCustomersList();
  }

  getCustomersList() {
    this.libraryService.getCustomers()
      .subscribe(customers => this.customersList = customers);
  }

}
