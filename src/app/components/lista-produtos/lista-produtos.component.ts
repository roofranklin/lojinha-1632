import { Component, inject, OnInit } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProdutoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit {
  // Injeção de dependência moderna
  productService = inject(ProductService);
  cartService = inject(CartService);
  produtos: any[] = [];

  ngOnInit(): void {
    console.log('O componente lista de produtos nasceu!');
    // Simula a chamada de API
    this.produtos = this.productService.getProducts();  
  }
  

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    this.cartService.adicionar(produto);
  }
}
