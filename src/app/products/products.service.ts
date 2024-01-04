import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsModel } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data: ProductsModel[] = [
    {id: 1, name: "Guitar", price: 1000},
    {id: 2, name: "Piano", price: 5000},
    {id: 3, name: "Drums", price: 1200 }
  ];

  constructor() { }

  getAllProducts() {
    // return of(this.data);
   return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.data)
      }, 3000);
    })
  }

  getProduct(id:number) {
    return of(this.data.find(item => item?.id === id))
  }
}
