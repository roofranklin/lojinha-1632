import { Component } from '@angular/core';
import { ListaProdutosComponent } from '../../components/lista-produtos/lista-produtos.component'

@Component({
  selector: 'app-home',
  imports: [ListaProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
