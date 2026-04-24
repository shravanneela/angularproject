import { Component, OnInit } from '@angular/core';
import { BookService} from '../book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-samplehomepage',
  templateUrl: './samplehomepage.html',
  styleUrls: ['./samplehomepage.css'] 
})
export class Samplehomepage implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log(this.books); // debug
    });
  }

  filter(category: string) {
    this.bookService.getBooksByCategory(category)
      .subscribe(data => {
        this.books = data;
      });
  }

  issue(id: string) {
    this.bookService.issueBook(id)
      .subscribe(() => this.loadBooks());
  }

  return(id: string) {
    this.bookService.returnBook(id)
      .subscribe(() => this.loadBooks());
  }
}

