import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor } from '@angular/common';
import { Cart } from '../../../data/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Cart[] = [];
  constructor(private _CarSirvice: CartService) {
    this.cart = this._CarSirvice.getCart();
  }

  incremant(Id: number) {
    this._CarSirvice.increaseItem(Id);
  }
  decremant(Id: number) {
    this._CarSirvice.decremantItem(Id);
  }
  delete(Id: number) {
    this._CarSirvice.deleteItem(Id);
    this.cart = this._CarSirvice.getCart();
  }
}
