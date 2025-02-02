import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { NgClass } from '@angular/common';
import { ReceipeRequestService } from '../service/receipe-request.service';
import { CounterService } from '../service/counter.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-product-details',
  imports: [NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id?: string;
  Math = Math;
  counterService = inject(CounterService);
  itemToCart = inject(CartServiceService)
  counter = 0;
  products = inject(ReceipeRequestService)
  productListService = inject(ReceipeRequestService);
  product?: Product; 

  constructor(private route: ActivatedRoute , private router: Router) {}


  ngOnInit(){

    const idd = this.route.snapshot.params['id'] || undefined;
    
    if(idd){

      this.products.getRecipe(idd).subscribe((res:any)=>{
        this.product = res;
      })
      
    }

    this.counterService
    .getCounter()
    .subscribe((response) => (this.counter = response));
  }

  itmAddToCart(item: Product | undefined){
    if(item){
      this.counterService.setCounter(this.counter + 1);
      this.itemToCart.addToCart(item).subscribe((res : any)=>{
      })
    }
  }

}
