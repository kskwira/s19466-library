import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "./book";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class BookLibraryService {

  baseUrl: string = 'http://localhost:4567';
  headers = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient){}

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url)
  }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<Book[]>(url)
  }

  addBook(book: Book) {
    const url = `${this.baseUrl}/books`;
    let body = JSON.stringify(book);
    return this.http.post(url, body, { headers: this.headers })
  }

  rentBook(book: Book) {
    const url = `${this.baseUrl}/books/${book.id}`;
    return this.http.put<Book>(url, book, {headers: this.headers})
  }

  deleteBook(id: number) {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete(url, { headers: this.headers })
  }
}
