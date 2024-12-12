// import React from "react";
// import { FaHome, FaThLarge, FaShoppingCart, FaUser } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// const BottomNav = () => {
//     const location = useLocation();

//     const isActive = (path) => location.pathname === path;

//     return (
//         <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg sm:hidden z-50">
//             <div className="flex justify-around py-2">
//                 {/* Home */}
//                 <Link to="/" className="flex flex-col items-center">
//                     <FaHome size={24} className={isActive("/") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className="text-xs text-gray-600">Home</span>
//                 </Link>

//                 {/* Categories */}
//                 <Link to="/category/all" className="flex flex-col items-center">
//                     <FaThLarge size={24} className={isActive("/category/all") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className="text-xs text-gray-600">Categories</span>
//                 </Link>

//                 {/* Cart */}
//                 <Link to="/cart" className="flex flex-col items-center">
//                     <FaShoppingCart size={24} className={isActive("/cart") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className="text-xs text-gray-600">Cart</span>
//                 </Link>

//                 {/* Profile */}
//                 <Link to="/login" className="flex flex-col items-center">
//                     <FaUser size={24} className={isActive("/login") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className="text-xs text-gray-600">Profile</span>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default BottomNav;


// import React from "react";
// import { HiHome, HiOutlineViewGrid, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";

// const BottomNav = () => {
//     const location = useLocation();

//     const isActive = (path) => location.pathname === path;

//     return (
//         <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg sm:hidden z-50">
//             <div className="flex justify-around py-2">
//                 {/* Home */}
//                 <Link to="/" className="flex flex-col items-center">
//                     <HiHome size={28} className={isActive("/") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className={`text-xs ${isActive("/") ? "text-emerald-500" : "text-gray-600"}`}>Home</span>
//                 </Link>

//                 {/* Categories */}
//                 <Link to="/category/all" className="flex flex-col items-center">
//                     <HiOutlineViewGrid
//                         size={28}
//                         className={isActive("/category/all") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/category/all") ? "text-emerald-500" : "text-gray-600"}`}>
//                         Categories
//                     </span>
//                 </Link>

//                 {/* Cart */}
//                 <Link to="/cart" className="flex flex-col items-center">
//                     <HiOutlineShoppingCart
//                         size={28}
//                         className={isActive("/cart") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/cart") ? "text-emerald-500" : "text-gray-600"}`}>Cart</span>
//                 </Link>

//                 {/* Profile */}
//                 <Link to="/login" className="flex flex-col items-center">
//                     <HiOutlineUser
//                         size={28}
//                         className={isActive("/login") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/login") ? "text-emerald-500" : "text-gray-600"}`}>Profile</span>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default BottomNav;


// import React from "react";
// import {
//     HiHome,
//     HiOutlineViewGrid,
//     HiOutlineShoppingCart,
//     HiOutlineUser,
//     HiOutlineCreditCard,
// } from "react-icons/hi"; // Using Heroicons
// import { Link, useLocation } from "react-router-dom";

// const BottomNav = () => {
//     const location = useLocation();

//     const isActive = (path) => location.pathname === path;

//     return (
//         <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg sm:hidden z-50">
//             <div className="flex justify-around py-2">
//                 {/* Home */}
//                 <Link to="/" className="flex flex-col items-center">
//                     <HiHome size={28} className={isActive("/") ? "text-emerald-500" : "text-gray-600"} />
//                     <span className={`text-xs ${isActive("/") ? "text-emerald-500" : "text-gray-600"}`}>Home</span>
//                 </Link>

//                 {/* Categories */}
//                 <Link to="/category/all" className="flex flex-col items-center">
//                     <HiOutlineViewGrid
//                         size={28}
//                         className={isActive("/category/all") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/category/all") ? "text-emerald-500" : "text-gray-600"}`}>
//                         Categories
//                     </span>
//                 </Link>

//                 {/* Cart */}
//                 <Link to="/cart" className="flex flex-col items-center">
//                     <HiOutlineShoppingCart
//                         size={28}
//                         className={isActive("/cart") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/cart") ? "text-emerald-500" : "text-gray-600"}`}>Cart</span>
//                 </Link>

//                 {/* Checkout */}
//                 <Link to="/checkout" className="flex flex-col items-center">
//                     <HiOutlineCreditCard
//                         size={28}
//                         className={isActive("/checkout") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/checkout") ? "text-emerald-500" : "text-gray-600"}`}>
//                         Checkout
//                     </span>
//                 </Link>

//                 {/* Profile */}
//                 <Link to="/login" className="flex flex-col items-center">
//                     <HiOutlineUser
//                         size={28}
//                         className={isActive("/login") ? "text-emerald-500" : "text-gray-600"}
//                     />
//                     <span className={`text-xs ${isActive("/login") ? "text-emerald-500" : "text-gray-600"}`}>Profile</span>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default BottomNav;

import {
    UserPlus,
  } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import {
    HiHome,
    HiOutlineViewGrid,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineCreditCard,
} from "react-icons/hi"; // Using Heroicons
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    const location = useLocation();
    const { user} = useUserStore();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg sm:hidden z-50">
            <div className="flex justify-around py-2">
                {/* Home */}
                <Link to="/" className="flex flex-col items-center">
                    <HiHome size={28} className={isActive("/") ? "text-emerald-500" : "text-gray-600"} />
                    <span className={`text-xs ${isActive("/") ? "text-emerald-500" : "text-gray-600"}`}>Home</span>
                </Link>

                {/* Categories */}
                <Link to="/categories" className="flex flex-col items-center">
    <HiOutlineViewGrid
        size={28}
        className={isActive("/categories") ? "text-emerald-500" : "text-gray-600"}
    />
    <span className={`text-xs ${isActive("/categories") ? "text-emerald-500" : "text-gray-600"}`}>
        Categories
    </span>
</Link>

                {/* Cart */}
                <Link to="/cart" className="flex flex-col items-center">
                    <HiOutlineShoppingCart
                        size={28}
                        className={isActive("/cart") ? "text-emerald-500" : "text-gray-600"}
                    />
                    <span className={`text-xs ${isActive("/cart") ? "text-emerald-500" : "text-gray-600"}`}>Cart</span>
                </Link>

                {/* Checkout */}
                <Link to="/checkout" className="flex flex-col items-center">
                    <HiOutlineCreditCard
                        size={28}
                        className={isActive("/checkout") ? "text-emerald-500" : "text-gray-600"}
                    />
                    <span className={`text-xs ${isActive("/checkout") ? "text-emerald-500" : "text-gray-600"}`}>
                        Checkout
                    </span>
                </Link>

                {/* Profile */}
                {!user?(<Link
            to="/login"
            className="flex flex-col items-center"
          >
            <UserPlus className={isActive("/login") ? "text-emerald-500" : "text-gray-600"} 
            size={26} />
            <span 
            className={`text-xs ${isActive("/login") ? "text-emerald-500" : "text-gray-600"}`}>
                        Sign in
                    </span>
            {/* Sign Up */}
          </Link>):(
                <Link to="/profile" className="flex flex-col items-center">
                    <HiOutlineUser
                        size={28}
                        className={isActive("/profile") ? "text-emerald-500" : "text-gray-600"}
                    />
                    <span className={`text-xs ${isActive("/profile") ? "text-emerald-500" : "text-gray-600"}`}>
                        Profile
                    </span>
                </Link>
          )}
            </div>
        </div>
    );
};

export default BottomNav;
