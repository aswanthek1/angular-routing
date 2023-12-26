import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-productsdetails',
  standalone: true,
  imports: [],
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css'
})
export class ProductsdetailsComponent implements OnInit {
  product:any = {};
  constructor(private store: ProductsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('id');
      if(id) {
        this.store.getProduct(parseInt(id, 10)).subscribe(product => {
          if(product) {
            this.product = product
          }
          else {
            this.router.navigate(['not-found'])
          }
        })
      }
    })
  }
}
