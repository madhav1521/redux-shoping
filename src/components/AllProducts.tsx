import { Box, Button, Card, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface Product {
    id: number;
    title: string;
    category: {
      id: number;
      name: string;
    };
    price: number;
  }
const AllProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

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

    return (
        <React.Fragment>
            <Container maxWidth='xl'>
                {products.map((product, index) => (
                    <Card key={index} className='px-3 py-3 mt-5 product-list'>
                        <Box className='d-flex justify-content-between'>
                            <Typography variant="h6" component="div">Title: {product.title}</Typography>
                            <Typography variant="subtitle1" component="p">Product cost: ${product.price}</Typography>
                        </Box>
                        <Box className='d-flex justify-content-between mt-3'>
                            <Typography variant="h6" component="div">Category: {product.category.name}</Typography>
                            <Button variant='contained' className='text-capitalize'>Add to Cart</Button>
                        </Box>
                    </Card>
                ))}
            </Container>
        </React.Fragment>
    )
}

export default AllProducts
