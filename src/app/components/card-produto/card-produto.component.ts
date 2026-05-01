import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  imports: [ CommonModule, TruncatePipe, DiscountPipe, RouterLink ],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  // Recebe o dado lá de fora. A exclamação significa "confia que vai chegar"
  @Input() produtoRecebido!: any;
  private store = inject(Store); // Injetando o carrinho

  clicouComprar(): void {
    this.store.dispatch(addToCart({ product: this.produtoRecebido }));
  }
}
