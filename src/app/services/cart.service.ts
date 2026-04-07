import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: any[] = [];

  adicionar(produto: any){
    this.itens.push(produto);
  }

  obterQuantidade(): number {
    return this.itens.length;
  }

  constructor() { }
}
