import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from '../Models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private router:Router) {}
  course!:any;
  ngOnInit(): void {
  //  this.activeRoute.data.subscribe({
  //   next:(data) => {
  //     this.course = data
  //   }
  //  })

  // this.course = this.router.getCurrentNavigation()?.extras.state;
  this.course = history.state;
  }

}
