import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: Product[] = [];
  totalQuantity: number;
  price: number;
  totalPrice: number;

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService.event.subscribe((product) => {
      let index = -1;
      index = this.shoppingCart.findIndex((p) => p.id === product.id);
      if (index != -1) {
        this.shoppingCart[index].quantity += 1;
      } else if (index === -1) {
        this.shoppingCart.push(product);
      }
      this.sum();
    });
  }

  deleteProduct(id) {
    let index = this.shoppingCart.findIndex((item) => item.id === id);
    this.shoppingCart.splice(index, 1);
    this.sum();
  }

  sum(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.shoppingCart) {
      this.shoppingCart.map((product) => {
        this.totalQuantity += product.quantity;
        this.price += product.price;
        this.totalPrice += product.price * product.quantity;
      });
    }
  }
}
