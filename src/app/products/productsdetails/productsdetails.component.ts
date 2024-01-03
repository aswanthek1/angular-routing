import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-productsdetails',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css'
})
export class ProductsdetailsComponent implements OnInit, OnDestroy {
  product:any = {};
  paramMapObs:any;
  constructor(private store: ProductsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
   this.paramMapObs = this.route.paramMap.subscribe((params:ParamMap) => {
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
  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe();
  }
}
