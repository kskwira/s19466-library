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

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<Book[]>(url)
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url)
  }

  deleteBook(id: number) {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete(url, { headers: this.headers })
  }
}
