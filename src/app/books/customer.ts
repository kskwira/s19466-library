export class Customer {
  id: number;
  name: string;
  booksRentedIds: number[];

  constructor(id: number, name: string, booksRentedIds: number[]) {
    this.id = id;
    this.name = name;
    this.booksRentedIds = booksRentedIds;
  }
}
