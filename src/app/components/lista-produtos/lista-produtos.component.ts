import { Component, inject } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProdutoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {
  // Injeção de dependência moderna
  productService = inject(ProductService);
  produtos = this.productService.getProducts();
}
