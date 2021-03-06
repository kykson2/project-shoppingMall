import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '@/components/navigation/NavBar';
import MainPage from '@/components/main/MainPage';
import FashionPage from '@/components/fashion/FashionPage';
import AccessoriesPage from '@/components/accessories/AccessoriesPage';
import DigitalPage from '@/components/digital/DigitalPage';
import Cart from '@/components/cart/Cart';
import ErrorPage from '@/components/error/ErrorPage';
import Product from '@/components/product/Product';
import { useDispatch } from 'react-redux';
import { setProductReducer } from '@/store/cartSlice';

const App = () => {
    const getItem = localStorage.getItem('cart');
    const dispatch = useDispatch();

    if (getItem) {
        const getCartList = JSON.parse(getItem);
        console.log(typeof getCartList);
    }

    // if (getCartList) {
    //     getCartList
    //     dispatch(setProductReducer(getCartList));
    // }

    return (
        <div className={'w-full h-full dark:bg-slate-800'}>
            {/* 네비게이션 바 */}
            <Router>
                <NavBar />
                <div className="relative">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="fashion" element={<FashionPage />} />
                        <Route
                            path="accessories"
                            element={<AccessoriesPage />}
                        />
                        <Route path="digital" element={<DigitalPage />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="error" element={<ErrorPage />} />
                        <Route path="product/*" element={<Product />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
