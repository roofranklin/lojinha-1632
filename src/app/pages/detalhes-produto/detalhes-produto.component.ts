import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/product.service';
import { addToCart } from '../../store/cart.actions';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-detalhes-produto',
  imports: [CommonModule, RouterLink, DiscountPipe],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css',
})
export class DetalhesProdutoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private store = inject(Store);

  produto: any = null;
  carregando = true;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe({
      next: (dados: any) => {
        this.produto = dados;
        this.carregando = false;
      },
      error: (erro: any) => {
        console.error('Erro ao buscar produto: ', erro);
        this.carregando = false;
      }
    })
  }

  adicionarAoCarrinho() {
    this.store.dispatch(addToCart({ product: this.produto }));
    alert("Produto adicionado ao carrinho!");
  }
}
