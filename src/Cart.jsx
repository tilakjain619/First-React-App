import React, { useEffect, useState } from 'react';

const Cart = ({ cart, setCart, handleChange, setShowCart }) => {
    const [price, setPrice] = useState(0);

    function handleRemove(id) {
        const arr = cart.filter((product) => product.id !== id);
        setCart(arr);
    }
    function handlePrice() {
        let amount = 0;
        cart.map((product) => {
            amount += product.price * product.quantity;
        })
        setPrice(amount);
    }
    useEffect(() => {
        handlePrice();
    }, [price, cart]);
    return (
        <div className='min-h-[80vh] p-4 '>
            <div className='grid sm:grid-cols-2 gap-x-2 gap-y-3'>
                {cart?.length > 0 ? (
                    cart.map((product) => (
                        <div key={product.id} className='flex border border-slate-200 shadow-lg shadow-gray-200 gap-3 rounded-md px-4 py-2 w-full items-center max-w-[400px] mx-auto'>
                            <img className='w-20 h-fit' src={product.image} alt={product.name} />
                            <div className='grid gap-2'>
                                <div>
                                    <h2 className='font-bold'>{product.name}</h2>
                                    <p>Rs {product.price}</p>
                                </div>
                                <div className='flex gap-2 flex-wrap'>
                                    <div className='flex gap-3 bg-slate-200 rounded-full items-center p-[2px]'>
                                        <button className='w-4 grid items-center text-center justify-center px-3 rounded-full bg-gray-100' onClick={() => handleChange(product, +1)}>+</button>
                                        <span>{product.quantity}</span>
                                        <button className='w-4 grid items-center text-center justify-center px-3 rounded-full bg-gray-100' onClick={() => handleChange(product, -1)}>-</button>
                                    </div>
                                    <button onClick={() => handleRemove(product.id)} className='text-gray-800'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='min-h-20 py-6'>Your cart is empty! <button onClick={() => setShowCart(false)} className='underline'>Return to shopping</button>
                    </div>
                )}
            </div>
            <article className='max-w-[400px] mx-auto text-right py-4 mt-2'>
                <h2 className='text-lg'>Total Cart: <span className='font-bold'>Rs {price}</span></h2>
            </article>
        </div>
    );
};

export default Cart;