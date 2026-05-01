import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetalhesProdutoComponent } from './pages/detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Rota raiz
    { path: 'checkout', component: CheckoutComponent},
    { path: 'produto/:id', component: DetalhesProdutoComponent } // Rota dinâmica
];