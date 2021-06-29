import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {BookLibraryService} from "../book-library.service";
import {Book} from "../book";


@Component({
  selector: 'new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBookForm = new FormGroup({
    isbn: new FormControl(''),
    title: new FormControl(''),
    authors: new FormControl(''),
    published: new FormControl(''),
    description: new FormControl(''),
    coverImage: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private location: Location,
              private libraryService: BookLibraryService) {
  }

  ngOnInit() {
    this.newBookForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      authors: ['', Validators.required],
      published: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required]
    });
  }

  saveBook() {
    if (this.newBookForm.valid) {
      let book = this.newBookForm.value as Book;
      book.isRented = false;
      book.rentedById = 0;
      this.libraryService.addBook(book)
        .subscribe(() => this.router.navigate(['/books']))
    }
  }

  goBack() {
    this.location.back();
  }
}
