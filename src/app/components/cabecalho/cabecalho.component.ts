import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../store/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  imports: [ CommonModule ],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  private store = inject(Store<{ cart: CartState }>);

  // store.select retorna um Observable
  carrinho$ = this.store.select(state => state.cart.items);
}
