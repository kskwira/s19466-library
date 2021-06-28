export class Customer {
  id: number;
  name: string;
  booksRentedId: number[];

  constructor(id: number, name: string, booksRentedId: number[] = []) {
    this.id = id;
    this.name = name;
    this.booksRentedId = booksRentedId;
  }
}
