import { createReducer, on } from "@ngrx/store";
import { addToCart, clearCart, initialCartState } from "./cart.actions";

export const cartReducer = createReducer (
    initialCartState, // O carrinho sempre começa vazio

    // Quanto ouvir a ação addToCart, faça isso!
    on(addToCart, (estadoAtual, action) => {
        console.log('Reducer foi chamado!', action.product.title);
        return {
            ...estadoAtual, // Copia tudo do estado atual
            items: [...estadoAtual.items, action.product] // Copiando os itens antigos e adicionando o novo no final
        };
    }),

    on(clearCart, (estadoAtual) => {
        return {
            ...estadoAtual,  // Copia tudo do estado atual
            items: []
        };
    })
)