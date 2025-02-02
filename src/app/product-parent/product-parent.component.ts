import { Component, Inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import {Product} from "../product";
import { ReceipeRequestService } from '../service/receipe-request.service';

@Component({
  selector: 'app-product-parent',
  imports: [ProductCardComponent],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.css'
})



export class ProductParentComponent {
  
  
  products: Product[] = Inject(ReceipeRequestService)

  

}
