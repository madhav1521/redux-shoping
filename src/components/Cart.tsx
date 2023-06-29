import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Card, Box, Container, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/actions/CartSlice'


const Cart = () => {
    const cartItems = useSelector((state: any) => state.cart.items)
    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total: number, item: any) => total + item.totalPrice, 0);
    };

    const onAddHandler = (item: any) => {
        const existingItem = cartItems.find((cartItem: { itemId: any }) => cartItem.itemId === item.itemId);

        if (existingItem) {
            dispatch(
                cartActions.addItemToCart({
                    ...item,
                    totalPrice: item.totalPrice + item.price,
                    shoppingPrice: calculateTotalPrice() + item.price
                })
            );
        } else {
            dispatch(cartActions.addItemToCart(item));
        }
    };

    const onRemoveHandler = (itemId: string | number) => {
        dispatch(cartActions.removeItemFromCart(itemId));
    };
    return (
        <Container maxWidth='md'>
            <Card className='bg-dark text-white py-3 px-3 cart-box '>
                <h3>Your Shopping Details</h3>
                <hr />
                <Container maxWidth='xl' >
                    {
                        cartItems.length > 0 ?
                            cartItems.map((item: any) => (
                                <>
                                    <Box className='cart-item text-white row' key={item.itemId}>
                                        <div className='col-10 d-flex-column justify-content-md-around'>
                                            <p className='text-info'>{item.title}</p>
                                            <div className='d-flex justify-content-md-around'>
                                                <p className='text-warning'>Total Cost: ${item.totalPrice}</p>
                                                <div>
                                                    <button className='cart-AR-btn add' onClick={() => onAddHandler(item)}><b>+</b></button>
                                                    <button className='cart-AR-btn remove' onClick={() => onRemoveHandler(item.itemId)}><b>-</b></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2 d-flex-column justify-content-around'>
                                            <p className='text-info'>${item.price}</p>
                                            <p className='text-secondary'>x{item.quantity}</p>
                                        </div>
                                    </Box>
                                </>
                            ))
                            :
                            <h5 className='text-danger'>No Items in your Cart List</h5>
                        }
                        {cartItems.length > 0 && <Typography variant='h4' component='div'>Payable amount: ${calculateTotalPrice()}</Typography>}
                </Container>
            </Card>
        </Container>
    )
}

export default Cart
