import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RouterOutlet, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lojinha-angular';
}
