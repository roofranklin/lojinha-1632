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
  carregando: boolean = true;

  ngOnInit(): void {
    console.log('Pedindo produtos para a API...');

    // Precisamos nos INSCREVER no Observable para que a requisição aconteça
    this.productService.getProducts().subscribe( {
      next: (dadosDaApi: any[]) => {
        console.log("Os dados chegaram", dadosDaApi);
        this.produtos = dadosDaApi;
        this.carregando = false; // Desliga o carregamento quando chega
      },
      error: (erro: any) => {
        console.error("Opa, deu ruim!", erro);
        this.carregando = false; // Desliga mesmo se der erro para não travar a tela
        alert("Erro ao buscar produto");
      }
    });
  }
  

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    this.cartService.adicionar(produto);
  }
}
