export class Customer {
  id: number;
  name: string;
  booksRentedId: number;

  constructor(id: number, name: string, booksRentedId: number = 0) {
    this.id = id;
    this.name = name;
    this.booksRentedId = booksRentedId;
  }
}
