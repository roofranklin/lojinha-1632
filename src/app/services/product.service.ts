import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {

  // 1. Injetando o HttpClient
  http = inject(HttpClient);

  // 2. A URL oficial da API que vamos consumir
  apiUrl = 'https://fakestoreapi.com/products';
  
  getProducts(): any {
    // 3. Faz um pedido do tipo GET e retorna um Observable
    return this.http.get<any[]>(this.apiUrl);    
  }
}
