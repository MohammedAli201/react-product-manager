import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../Redux/reducer/productSlice';

const ProductManager = () => {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');

    const handleAddProduct = () => {
        dispatch(addProduct({ id: Date.now(), name: productName }));
        setProductName(''); // Clear the input field after adding the product
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct({ id }));
        alert('Product removed');
        console.log('Product removed', id);
    };

    return (
        <div>
            <h2>Product List</h2>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
            />
            <button onClick={handleAddProduct}>Add Product</button>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManager;
