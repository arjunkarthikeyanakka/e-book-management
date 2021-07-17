import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdataService {

  constructor() { }
  private books: any[] = [
    {
      title:"Ghost Ship",
      author:"James Rollins",
      publisher:"Sigma Force Novels",
      price: 135.86,
      label:"Best Seller",
      image:"https://books.google.com/books/publisher/content/images/frontcover/-zs2DwAAQBAJ?fife=w200-h300"
      },
      {
      title:"Sherlock Holmes",
      author:"Arthur Conan Doyle",
      publisher:"Sigma Force Novels",
      price:273.56,
      label:"Best Seller",
      image:"https://books.google.com/books/publisher/content/images/frontcover/B101DwAAQBAJ?fife=w200-h300"
      },
      {
      title:"The Fall",
      author:"John Lescroart",
      publisher:"Hachette UK",
      price:400.61,
      image:"https://books.google.com/books/publisher/content/images/frontcover/DhONBwAAQBAJ?fife=w200-h300"
      },
      {
      title:"The Trust",
      author:"Ronald H. Balson",
      publisher:"St. Martin's Press",
      price:373.84,
      label:"Newly Launched",
      image:"https://books.google.com/books/publisher/content/images/frontcover/-dM4DgAAQBAJ?fife=w200-h300"
      },
      {
      title:"River God",
      author:"Wilbur Smith",
      publisher:"Bonnier Publishing Fiction Ltd.",
      price:363.96,
      image:"https://books.google.com/books/publisher/content/images/frontcover/pxNDDwAAQBAJ?fife=w200-h300"
      },
      {
      title:"Cry Wolf",
      author:"Wilbur Smith",
      publisher:"Bonnier Publishing Fiction Ltd.",
      price:393.63,
      image:"https://books.google.com/books/publisher/content/images/frontcover/ixNDDwAAQBAJ?fife=w200-h300"
      },
      {
      title:"Tom Clancy's Line of Sight",
      author:"Mike Maden",
      publisher:"Penguin UK",
      price:343.96,
      label:"Newly Launched",
      image:"https://books.google.com/books/publisher/content/images/frontcover/PD1DDwAAQBAJ?fife=w200-h300"
      },
      {
      title:"Shutter Island",
      author:"Dennis Lehane",
      publisher:"Harper Collins",
      price:315.79,
      image:"https://books.google.com/books/content/images/frontcover/SL6vnVrx2nkC?fife=w200-h300"
      },
      {
      title:"Voyage",
      author:"Sanjana Sharma",
      publisher:"WHERE INDIA WRITES PUBLICATION",
      price:293.56,
      image:"https://books.google.com/books/publisher/content/images/frontcover/1TozEAAAQBAJ?fife=w200-h300"
      },
      {
      title:"Those in Peril",
      author:"Wilbur Smith",
      publisher:"Bonnier Publishing Fiction Ltd.",
      price:353.35,
      label:"Newly Launched",
      image:"https://books.google.com/books/publisher/content/images/frontcover/0xNDDwAAQBAJ?fife=w200-h300"
      }
  ]

  getBooksDetails():any[]{
    return this.books;
  }
}
