import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-card-produto',
  imports: [ CommonModule, TruncatePipe ],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  // Recebe o dado lá de fora. A exclamação significa "confia que vai chegar"
  @Input() produtoRecebido!: any;
  @Output() adicionar = new EventEmitter<any>();


  clicouComprar(): void {
    this.adicionar.emit(this.produtoRecebido);
  }
}
