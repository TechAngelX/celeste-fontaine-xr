// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from './components/TopMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import ModelViewer from './ModelViewer';

import './App.min.css';

// Lazy load components
const HomeView = lazy(() => import('./views/home'));
const SignInView = lazy(() => import('./views/account/SignIn'));
const SignUpView = lazy(() => import('./views/account/SignUp'));
const ForgotPasswordView = lazy(() => import('./views/account/ForgotPassword'));
const OrdersView = lazy(() => import('./views/account/Orders'));
const WishlistView = lazy(() => import('./views/account/Wishlist'));
const NotificationView = lazy(() => import('./views/account/Notification'));
const MyProfileView = lazy(() => import('./views/account/MyProfile'));
const ProductListView = lazy(() => import('./views/product/List'));
const ProductDetailView = lazy(() => import('./views/product/Detail'));
const StarZoneView = lazy(() => import('./views/product/StarZone'));
const CartView = lazy(() => import('./views/cart/Cart'));
const CheckoutView = lazy(() => import('./views/cart/Checkout'));
const InvoiceView = lazy(() => import('./views/cart/Invoice'));
const DocumentationView = lazy(() => import('./views/Documentation'));
const NotFoundView = lazy(() => import('./views/pages/404'));
const InternalServerErrorView = lazy(() => import('./views/pages/500'));
const ContactUsView = lazy(() => import('./views/pages/ContactUs'));
const SupportView = lazy(() => import('./views/pages/Support'));
const BlogView = lazy(() => import('./views/blog/Blog'));
const BlogDetailView = lazy(() => import('./views/blog/Detail'));

function App() {
    return (
        <Router>
            <React.Fragment>
                <Header />
                <TopMenu />
                <Suspense fallback={<div className="text-white text-center mt-3">Loading...</div>}>
                    <Routes>
                        <Route exact path="/" element={<HomeView />} />
                        <Route path="/account/signin" element={<SignInView />} />
                        <Route path="/account/signup" element={<SignUpView />} />
                        <Route path="/account/forgotpassword" element={<ForgotPasswordView />} />
                        <Route path="/account/profile" element={<MyProfileView />} />
                        <Route path="/account/orders" element={<OrdersView />} />
                        <Route path="/account/wishlist" element={<WishlistView />} />
                        <Route path="/account/notification" element={<NotificationView />} />
                        <Route path="/category" element={<ProductListView />} />
                        <Route path="/product/detail" element={<ProductDetailView />} />
                        <Route path="/star/zone" element={<StarZoneView />} />
                        <Route path="/cart" element={<CartView />} />
                        <Route path="/checkout" element={<CheckoutView />} />
                        <Route path="/invoice" element={<InvoiceView />} />
                        <Route path="/documentation" element={<DocumentationView />} />
                        <Route path="/contact-us" element={<ContactUsView />} />
                        <Route path="/support" element={<SupportView />} />
                        <Route path="/blog" element={<BlogView />} />
                        <Route path="/blog/detail" element={<BlogDetailView />} />
                        <Route path="/model-viewer" element={<ModelViewer />} /> {/* Added route for ModelViewer */}
                        <Route path="/500" element={<InternalServerErrorView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </Suspense>
                <Footer />
            </React.Fragment>
        </Router>
    );
}

export default App;
