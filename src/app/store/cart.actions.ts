import { createAction, props } from "@ngrx/store";

// Define o contrato do nosso estado
export interface CartState {
    items: any[];
};

// O estado inicial (carrinho vazio)
export const initialCartState: CartState = {
    items: []
};

// A ação: Enviando a intenção pro reducer
export const addToCart = createAction(
    '[Card de Produto] Adicionar ao Carrinho',
    props<{ product: any }>() // A carga que a ação carrega
)