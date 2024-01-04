import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsModel } from '../../Models/product.model';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent implements OnInit {
  products: any[] = []
  searchString!:string;
  constructor(private store: ProductsService, private activeRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.store.getAllProducts().subscribe((products:any) => {
      // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search') || ''
      this.activeRoute.queryParams.subscribe((data:any) => {
        this.searchString = data['search']
        if(this.searchString === undefined || this.searchString === '' || this.searchString === null) {
          this.products = products;
        }
        else {
          this.products = products.filter((item:any) => item.name.toLowerCase().includes(this.searchString.toLowerCase()))
        }
      })
    })

  }
}
