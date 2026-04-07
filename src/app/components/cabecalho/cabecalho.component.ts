import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  cartService = inject(CartService);
}
