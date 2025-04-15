import { Injectable } from '@angular/core';
import { Product } from '../../data/products';
import { Cart } from '../../data/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];

  addToCart(product: Product) {
    const existInCard = this.cart.find((m) => m.product.id == product.id);
    if (existInCard) {
      existInCard.Quantity++;
      // if (product.stock) {
      //   card[product] = qu
      // }
    } else {
      this.cart.push({ product: product, Quantity: 1 });
    }
    console.log(this.cart);
  }
  getCart() {
    return this.cart;
  }
  increaseItem(Id: number) {
    const productNeeded = this.cart.find((m) => m.product.id == Id);
    if (productNeeded) {
      productNeeded.Quantity++;
    }
  }

  decremantItem(Id: number) {
    const productNeeded = this.cart.find((m) => m.product.id == Id);
    if (productNeeded) {
      productNeeded.Quantity--;
    }
  }

  deleteItem(Id: number) {
    // const productNeeded = this.cart.find((m) => m.product.id == Id);
    // if (productNeeded) {
    //   this.cart.splice(Id, 1);
    // }
    this.cart = this.cart.filter((m) => m.product.id !== Id);
  }
}
