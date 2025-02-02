import { Component, inject } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [];
  total: number = 0;
  counterService = inject(CounterService);
  cartProducts = inject(CartServiceService);
  productArr = inject(CartServiceService);
  counter = 0;

  ngOnInit() {
    this.counterService.getCounter().subscribe((response) => (this.counter = response));

    this.productArr.getCartProducts().subscribe((res) => {
      this.products = res;
      this.calculateTotal(); 
    });
  }

  calculateTotal(): void {
    this.total = this.products.reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0);
  }

  increase(item: Product) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    }
    item.quantity += 1; 
    this.counterService.setCounter(this.counter + 1);
    this.calculateTotal(); 
  }

  decrease(item: Product) {
    if (item.quantity === undefined || item.quantity <= 0) {
      return;
    }
    item.quantity -= 1; 
    this.counterService.setCounter(this.counter - 1);

    if (item.quantity < 1) {
      this.productArr.setCartProduct(item).subscribe((res) => {
        this.products = res;
        this.calculateTotal();
      });
    } else {
      this.calculateTotal(); 
    }
  }
}