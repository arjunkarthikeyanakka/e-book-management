import { Component, OnInit } from '@angular/core';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any[]=[]
  constructor(private bdObj:BooksdataService) { }

  ngOnInit(): void {
    this.books=this.bdObj.getBooksDetails()
  }

}
