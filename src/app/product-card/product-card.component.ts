import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CounterService } from '../service/counter.service';
import { ReceipeRequestService } from '../service/receipe-request.service';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() products: any[] = [];
  storageArr: any[] = [];
  productList: any;
  Math = Math;
  Number = Number;
  counterService = inject(CounterService);
  productListService = inject(ReceipeRequestService);
  itemToCart = inject(CartServiceService)
  counter = 0;

  ngOnInit() {
    
    this.counterService
      .getCounter()
      .subscribe((response) => (this.counter = response));
    this.productListService
      .getReceipesList()
      .subscribe((res: any) => (this.productList = res.products));
  }

  increaseCount(id: string) {
    this.counterService.setCounter(this.counter + 1);
    const lista = this.productList.find((el: any) => el.id == id);
    if (lista) {
      this.storageArr.push(lista);
    }
    window.localStorage.setItem('products', JSON.stringify(this.storageArr));
  }

  itmAddToCart(item: Product){
    this.counterService.setCounter(this.counter + 1);
    this.itemToCart.addToCart(item).subscribe((res : any)=>{
  })

  }

}
