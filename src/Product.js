import React from 'react'
import ProductDetails from './ProductDetails'


function Product() {
    return (
        <div className='container py-5'>
            <div className='row'>
               <ProductDetails name="Iphone" price="2000" />
               <ProductDetails name="Samsung" price="50000" />
               <ProductDetails name="Oneplus" price="3000" />
               <ProductDetails name="Vivo" price="6000" />
               <ProductDetails name="Oppo" price="8000" />
               <ProductDetails name="MI" price="5000" />
            </div>
        </div>
    )
}

export default Product;
