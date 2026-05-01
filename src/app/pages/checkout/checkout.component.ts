import { Component } from '@angular/core';
// 1. Importações essenciais para o formulário
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  // 2. Montando a estrutura do formulário
  checkoutForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormControl('', [Validators.required])
  });

  // 3. Método chamado no submit
  finalizarPedido() {
    if(this.checkoutForm.valid){
      console.log('Pedido finalizado!', this.checkoutForm.value);
      alert('Compra realizada com sucesso!');
      this.checkoutForm.reset(); // Limpa o formulário
    } else {
      // Força a mostrar os erros se o usuário tentar burlar
      this.checkoutForm.markAllAsTouched();
    }
  } 

}
