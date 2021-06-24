export class Book {
  id: number;
  isbn: number;
  title: string;
  authors: string;
  published: string;
  description: string;
  coverImage: string;
  isRented: boolean;
  rentedById: number;

  constructor(id: number, isbn: number, title: string, authors: string, published: string, description: string, coverImage: string, isRented: boolean = false, rentedById: number = 0) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.authors = authors;
    this.published = published;
    this.description = description;
    this.coverImage = coverImage;
    this.isRented = isRented;
    this.rentedById = rentedById;
  }
}
