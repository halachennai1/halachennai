import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import EditProductPage from "./pages/EditProductPage"

import Navbar from "./components/Navbar";
import DeliveryNote from "./components/Note";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";
import Footer from "./components/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
import LegalTermsPage from "./pages/LegalTermsPage";

import BottomNav from "./components/BottomNav";
import ScrollingBanner from "./components/ScrollingBanner";
import ProfilePage from "./pages/ProfilePage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import axios from "./lib/axios";

function App() {
    useEffect(() => {
        const keepServerAlive = () => {
          setInterval(async () => {
            try {
              // Replace with your OnRender app's URL
              await axios.get('/ping');
              console.log('Server pinged successfully');
            } catch (error) {
              console.error('Failed to ping the server', error);
            }
          }, 5 * 60 * 1000); // Ping every 5 minutes (300000 ms)
        };
    
        // Call the ping function when the component mounts
        keepServerAlive();
    }, []);
    const { user, checkAuth, checkingAuth } = useUserStore();
    const { getCartItems } = useCartStore();
    const [bannerVisible, setBannerVisible] = useState(true);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (!user) return;
        getCartItems();
    }, [getCartItems, user]);

    if (checkingAuth) return <LoadingSpinner />;

    return (
        <div className="min-h-screen bg-white-900 text-white relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.3)_0%,rgba(218,165,32,0.2)_45%,rgba(184,134,11,0.1)_100%)]" />
                </div>
            </div>

            <div className="relative z-50">
                {/* Scrolling Banner */}
                {/* <ScrollingBanner setBannerVisible={setBannerVisible} /> */}

                <div className={bannerVisible ? "pt-16" : "pt-4"}> {/* Adjust padding based on banner visibility */}
                    <Navbar isFixed={bannerVisible} /> {/* Pass a flag to toggle navbar position */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />
                        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
                        <Route
                            path="/secret-dashboard"
                            element={user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />}
                        />
                        <Route path="/category/:category" element={<CategoryPage />} />
                        <Route path="/cart" element={user ? <CartPage /> : <Navigate to="/login" />} />
                        <Route path="/product/:id" element={<ProductDetailsPage />} />
                        <Route
                            path="/purchase-success"
                            element={user ? <PurchaseSuccessPage /> : <Navigate to="/login" />}
                        />
                        <Route path="/purchase-cancel" element={user ? <PurchaseCancelPage /> : <Navigate to="/login" />} />
                        <Route path="product/search/:productName" element={<SearchPage />} />
                        <Route path="/legal" element={<LegalTermsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/categories" element={<AllCategoriesPage />} />
                        <Route path="/product/edit/:id" element={user?.role === "admin" ? <EditProductPage/> : <Navigate to="/login" />} />
                    </Routes>
                </div>

                <DeliveryNote />
                <Footer />
            </div>

            {/* Add BottomNav */}
            <BottomNav />

            <Toaster />
        </div>
    );
}

export default App;
