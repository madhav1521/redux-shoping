import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/actions/CartSlice';

interface Product {
    _id: string | number;
    name: string;
    itemId: number | string;
    title: string;
    category: {
        id: number;
        name: string;
    };
    price: number;
}

const AllProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://api.storerestapi.com/products';
                const response = await fetch(url);
                const result = await response.json();
                setProducts(result.data);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const addToCartHandler = (item: Product):void => {
        dispatch(cartActions.addItemToCart({
            itemId: item._id,
            title: item.title,
            price: item.price,
            category: item.category,
            quantity: 0,
            totalPrice: 0,
        }));
      };

    return (
        <React.Fragment>
            <Container maxWidth='xl'>
                <Grid container className='d-flex row m-0 py-3'>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className='product-list'>
                                <Box className='d-xl-flex justify-content-between'>
                                    <Typography variant="h6" component="div" className='text-success fw-bold'>Title: {product.title}</Typography>
                                    <Typography variant="subtitle1" component="p" className='mt-sm-3 mt-xl-0 text-dark'>Product cost: <span className='text-primary bg-dark py-2 px-2 rounded-2'> ${product.price}</span></Typography>
                                </Box>
                                <Box className='d-xl-flex justify-content-between mt-3'>
                                    <Typography variant="h6" component="div" className='fw-bold text-dark'>Category: {product.category.name}</Typography>
                                    <Button variant='contained' className='text-capitalize' onClick={() => addToCartHandler(product)}>Add to Cart</Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AllProducts
