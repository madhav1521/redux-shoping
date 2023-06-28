import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Card, Box, Container } from '@mui/material'

const Cart = () => {
    return (
        <Container maxWidth='md' className='mt-5'>
            <Card className='bg-dark text-white py-3 '>
                <h3>Your Shopping Details</h3>
                <hr />
                <Container maxWidth='md' >
                    <Box className='cart-item text-white'>
                        <div className='d-flex justify-content-around'>
                            <p className='text-info'>Name of the item</p>
                            <p className='text-info'>$100(price of one product)</p>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <p className='text-secondary'>x3(no. of products)</p>
                            <p className='text-warning'>$300(total price)</p>
                        </div>
                    </Box>
                </Container>
            </Card>
        </Container>
    )
}

export default Cart
