import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Dados falsos (Mock)
  private listaProdutos = [
    { id: 1, title: 'Mochila para Laptop com 17 bolsos e pronta para conectar powerbank externo', price: 109.90, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png' },
    { id: 2, title: 'Camiseta Casual', price: 49.90, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png' },
    { id: 3, title: 'Jaqueta de Frio', price: 199.99, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png' },
    { id: 4, title: 'Casaco de Inverno', price: 250.99, image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png' },
  ];

  getProducts() {
    return this.listaProdutos;
  }
}
