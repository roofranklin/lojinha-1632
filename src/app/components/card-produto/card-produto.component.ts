import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  // Recebe o dado lá de fora. A exclamação significa "confia que vai chegar"
  @Input() produtoRecebido!: any;
}
