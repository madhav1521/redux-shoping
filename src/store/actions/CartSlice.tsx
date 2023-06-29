import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
    itemId: number | string;
    quantity: number;
    price: number;
    title: string;
    totalPrice: number;
    category:{
        name:string;
    };
}

interface CartState {
    items: Cart[];
    totalQuantity: number;
    totalPrice: number;
}

const initialCartState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}
const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Cart>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item: any) => item.itemId === newItem.itemId);
            state.totalQuantity+=1;
            if (!existingItem) {
                state.items.push({
                    itemId:newItem.itemId,
                    price: newItem.price,
                    quantity: newItem.quantity + 1,
                    category:newItem.category,
                    title: newItem.title,
                    totalPrice: newItem.price,
                });

            }
            else {
                existingItem.quantity+=1;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action: PayloadAction<number | string>) {
            const itemIdToRemove = action.payload;
            const existingItem:any = state.items.find(item => item.itemId === itemIdToRemove)
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.itemId !== itemIdToRemove);
                // state.changed = true
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;

            }
        },
    }
})

export const cartActions = CartSlice.actions
export default CartSlice;