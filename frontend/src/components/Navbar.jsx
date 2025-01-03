// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state
//   let closeDropdownTimeout;

//   const handleMouseEnter = () => {
//     if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     closeDropdownTimeout = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 500);
//   };

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const [productName, setProductName] = useState("");

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5">
//         <div className="flex flex-wrap justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex">
//             HALACHENNAI
//           </Link>

//           {/* Hamburger Button for Mobile */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden text-white p-2 focus:outline-none"
//           >
//             <Menu size={24} />
//           </button>

//           {/* Navbar Links - Mobile and Desktop */}
//           <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} space-x-4`}>
//             <Link
//               to="/"
//               className="relative text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Home
//             </Link>
//             <div
//               className="relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out">
//                 Category
//               </button>

//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                   {categories.length > 0 ? (
//                     categories.map((category, index) => (
//                       <Link
//                         to={`/category/${category.name.toLowerCase()}`}
//                         className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                         key={index}
//                       >
//                         {category.name}
//                       </Link>
//                     ))
//                   ) : (
//                     <p className="px-4 py-2 text-gray-300">No categories available</p>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="relative flex-1">
//                 <input
//                   id="name"
//                   type="text"
//                   value={productName}
//                   onChange={(e) => setProductName(e.target.value)}
//                   className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//                   placeholder="Search for Product"
//                 />
//               </div>

//               <Link
//                 to={productName.trim() ? `/product/search/${productName}` : `/`}
//                 className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//               >
//                 Search
//               </Link>
//             </div>

//             {user && (
//               <Link
//                 to="/cart"
//                 className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//               >
//                 <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//                 <span className="hidden sm:inline">Cart</span>
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                     {cart.length}
//                   </span>
//                 )}
//               </Link>
//             )}

//             {isAdmin && (
//               <Link
//                 className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//                 to="/secret-dashboard"
//               >
//                 <Lock className="inline-block mr-1" size={18} />
//                 <span className="hidden sm:inline">Dashboard</span>
//               </Link>
//             )}

//             {user ? (
//               <button
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                 onClick={logout}
//               >
//                 <LogOut size={18} />
//                 <span className="hidden sm:inline ml-2">Log Out</span>
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/signup"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                 >
//                   <UserPlus className="mr-2" size={18} />
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                 >
//                   <LogIn className="mr-2" size={18} />
//                   Login
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   let closeDropdownTimeout;

//   const handleMouseEnter = () => {
//     if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     closeDropdownTimeout = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 500);
//   };

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const [productName, setProductName] = useState("");

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5">
//         <div className="flex flex-wrap justify-between items-center">
//           {/* <Link to="/" className="text-2xl font-bold text-emerald-400 flex items-center space-x-2">
//             H A L A C H E N N A I
//           </Link> */}
// 		  <Link
//   to="/"
//   className="text-2xl font-bold text-emerald-400 flex items-center space-x-2"
//   style={{ fontFamily: 'DraftWerk, sans-serif' }}
// >
//   H A L A - C H E N N A I
// </Link>

//           {/* Hamburger Button for Mobile */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden text-white p-2 focus:outline-none"
//           >
//             <Menu size={24} />
//           </button>

//           {/* Navbar Links - Mobile and Desktop */}
//           <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:space-x-8 space-y-4 lg:space-y-0`}>
//             <div className="flex items-center space-x-8">
//               <Link
//                 to="/"
//                 className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//               >
//                 Home
//               </Link>
//               <div
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out">
//                   Category
//                 </button>

//                 {/* Dropdown menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                     {categories.length > 0 ? (
//                       categories.map((category, index) => (
//                         <Link
//                           to={`/category/${category.name.toLowerCase()}`}
//                           className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                           key={index}
//                         >
//                           {category.name}
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="px-4 py-2 text-gray-300">No categories available</p>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Search */}
//               <div className="flex items-center gap-2">
//                 <div className="relative flex-1">
//                   <input
//                     id="name"
//                     type="text"
//                     value={productName}
//                     onChange={(e) => setProductName(e.target.value)}
//                     className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//                     placeholder="Search for Product"
//                   />
//                 </div>

//                 <Link
//                   to={productName.trim() ? `/product/search/${productName}` : `/`}
//                   className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//                 >
//                   Search
//                 </Link>
//               </div>
//             </div>

//             {/* User and Cart Links */}
//             <div className="flex items-center space-x-4">
//               {user && (
//                 <Link
//                   to="/cart"
//                   className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//                 >
//                   <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//                   <span className="hidden sm:inline">Cart</span>
//                   {cart.length > 0 && (
//                     <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                       {cart.length}
//                     </span>
//                   )}
//                 </Link>
//               )}

//               {isAdmin && (
//                 <Link
//                   className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//                   to="/secret-dashboard"
//                 >
//                   <Lock className="inline-block mr-1" size={18} />
//                   <span className="hidden sm:inline">Dashboard</span>
//                 </Link>
//               )}

//               {user ? (
//                 <button
//                   className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                   onClick={logout}
//                 >
//                   <LogOut size={18} />
//                   <span className="hidden sm:inline ml-2">Log Out</span>
//                 </button>
//               ) : (
//                 <>
//                   <Link
//                     to="/signup"
//                     className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                   >
//                     <UserPlus className="mr-2" size={18} />
//                     Sign Up
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//                   >
//                     <LogIn className="mr-2" size={18} />
//                     Login
//                   </Link>
//                 </>
//               )}
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   const [productName, setProductName] = useState("");

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5 flex justify-between items-center">
//         {/* Toggle Button (Left Aligned) */}
//         <button
//           onClick={handleToggleMenu}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>

//         {/* Centered Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-emerald-400 flex items-center justify-center flex-grow"
//           style={{ fontFamily: "DraftWerk, sans-serif" }}
//         >
//           H A L A - C H E N N A I
//         </Link>

//         {/* Hidden Placeholder for Center Alignment */}
//         <div className="lg:hidden w-6"></div>
//       </div>

//       {/* Navbar Links (Mobile and Desktop) */}
//       <nav
//         className={`lg:flex lg:justify-between lg:items-center ${
//           isMenuOpen ? "block" : "hidden"
//         } bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-0`}
//       >
//         <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
//           {/* Home Link */}
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* Categories Dropdown */}
//           <div
//             className="relative lg:inline-block"
//             onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
//             onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Category
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <Link
//                       key={index}
//                       to={`/category/${category.name.toLowerCase()}`}
//                       className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                     >
//                       {category.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="px-4 py-2 text-gray-300">No categories available</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Search */}
//           <div className="flex items-center gap-2">
//             <input
//               id="name"
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//               placeholder="Search for Product"
//             />
//             <Link
//               to={productName.trim() ? `/product/search/${productName}` : `/`}
//               className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//             >
//               Search
//             </Link>
//           </div>
//         </div>

//         {/* User and Cart Links */}
//         <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//           {user && (
//             <Link
//               to="/cart"
//               className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           )}
//           {isAdmin && (
//             <Link
//               className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//               to="/secret-dashboard"
//             >
//               <Lock className="inline-block mr-1" size={18} />
//               Dashboard
//             </Link>
//           )}
//           {user ? (
//             <button
//               className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               onClick={logout}
//             >
//               <LogOut size={18} />
//               <span className="hidden sm:inline ml-2">Log Out</span>
//             </button>
//           ) : (
//             <div className="flex space-x-4">
//               <Link
//                 to="/signup"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <UserPlus className="mr-2" size={18} />
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <LogIn className="mr-2" size={18} />
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu, Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search input
//   const [productName, setProductName] = useState("");

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5 flex justify-between items-center">
//         {/* Toggle Button (Left Aligned) */}
//         <button
//           onClick={handleToggleMenu}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>

//         {/* Centered Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-emerald-400 flex items-center justify-center flex-grow"
//           style={{ fontFamily: "DraftWerk, sans-serif" }}
//         >
//           H A L A - C H E N N A I
//         </Link>

//         {/* Search Icon */}
//         <button
//           onClick={handleSearchToggle}
//           className="text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>
//       </div>

//       {/* Navbar Links (Mobile and Desktop) */}
//       <nav
//         className={`lg:flex lg:justify-between lg:items-center ${
//           isMenuOpen ? "block" : "hidden"
//         } bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-0`}
//       >
//         <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
//           {/* Home Link */}
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* Categories Dropdown */}
//           <div
//             className="relative lg:inline-block"
//             onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
//             onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Category
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <Link
//                       key={index}
//                       to={`/category/${category.name.toLowerCase()}`}
//                       className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                     >
//                       {category.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="px-4 py-2 text-gray-300">No categories available</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* User and Cart Links */}
//         <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//           {user && (
//             <Link
//               to="/cart"
//               className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           )}
//           {isAdmin && (
//             <Link
//               className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//               to="/secret-dashboard"
//             >
//               <Lock className="inline-block mr-1" size={18} />
//               Dashboard
//             </Link>
//           )}
//           {user ? (
//             <button
//               className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               onClick={logout}
//             >
//               <LogOut size={18} />
//               <span className="hidden sm:inline ml-2">Log Out</span>
//             </button>
//           ) : (
//             <div className="flex space-x-4">
//               <Link
//                 to="/signup"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <UserPlus className="mr-2" size={18} />
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <LogIn className="mr-2" size={18} />
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Search Input */}
//       {isSearchOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-900 px-4 py-3">
//           <div className="flex items-center gap-2">
//             <input
//               id="name"
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//               placeholder="Search for Product"
//             />
//             <Link
//               to={productName.trim() ? `/product/search/${productName}` : `/`}
//               className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//             >
//               Search
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu, Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search input (mobile)
//   const [productName, setProductName] = useState("");

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5 flex justify-between items-center">
//         {/* Mobile Toggle Button */}
//         <button
//           onClick={handleToggleMenu}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>

//         {/* Centered Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-emerald-400 flex items-center justify-center flex-grow"
//           style={{ fontFamily: "DraftWerk, sans-serif" }}
//         >
//           H A L A - C H E N N A I
//         </Link>

//         {/* Mobile Search Icon */}
//         <button
//           onClick={handleSearchToggle}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>
//       </div>

//       {/* Navbar Links (Mobile and Desktop) */}
//       <nav
//         className={`lg:flex lg:justify-between lg:items-center ${
//           isMenuOpen ? "block" : "hidden"
//         } bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-0`}
//       >

//         <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
//           {/* Home Link */}
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* Categories Dropdown */}
//           <div
//             className="relative lg:inline-block"
//             onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
//             onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Category
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <Link
//                       key={index}
//                       to={`/category/${category.name.toLowerCase()}`}
//                       className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                     >
//                       {category.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="px-4 py-2 text-gray-300">No categories available</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex items-center gap-2">
//           <input
//             id="name"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//             placeholder="Search for Product"
//           />
//           <Link
//             to={productName.trim() ? `/product/search/${productName}` : `/`}
//             className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//           >
//             Search
//           </Link>
//         </div>

//         {/* User and Cart Links */}
//         <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//           {user && (
//             <Link
//               to="/cart"
//               className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           )}
//           {isAdmin && (
//             <Link
//               className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//               to="/secret-dashboard"
//             >
//               <Lock className="inline-block mr-1" size={18} />
//               Dashboard
//             </Link>
//           )}
//           {user ? (
//             <button
//               className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               onClick={logout}
//             >
//               <LogOut size={18} />
//               <span className="hidden sm:inline ml-2">Log Out</span>
//             </button>
//           ) : (
//             <div className="flex space-x-4">
//               <Link
//                 to="/signup"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <UserPlus className="mr-2" size={18} />
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <LogIn className="mr-2" size={18} />
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Search Input */}
//       {isSearchOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-900 px-4 py-3 lg:hidden">
//           <div className="flex items-center gap-2">
//             <input
//               id="name"
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//               placeholder="Search for Product"
//             />
//             <Link
//               to={productName.trim() ? `/product/search/${productName}` : `/`}
//               className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//             >
//               Search
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu, X, Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search input (mobile)
//   const [productName, setProductName] = useState("");

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5 flex justify-between items-center">
//         {/* Mobile Toggle Button */}
//         <button
//           onClick={handleToggleMenu}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>

//         {/* Centered Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-emerald-400 flex items-center justify-center flex-grow"
//           style={{ fontFamily: "DraftWerk, sans-serif" }}
//         >
//           H A L A - C H E N N A I
//         </Link>

//         {/* Mobile Search Icon */}
//         <button
//           onClick={handleSearchToggle}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>

//         {/* Desktop Search Icon */}
//         {/* <button
//           onClick={handleSearchToggle}
//           className="hidden lg:block text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button> */}
//       </div>

//       {/* Navbar Links (Mobile and Desktop) */}
//       <nav
//         className={`lg:flex lg:justify-between lg:items-center ${isMenuOpen ? "block" : "hidden"} bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-0`}
//       >
//         <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
//           {/* Home Link */}
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* Categories Dropdown */}
//           <div
//             className="relative lg:inline-block"
//             onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
//             onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Category
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <Link
//                       key={index}
//                       to={`/category/${category.name.toLowerCase()}`}
//                       className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                     >
//                       {category.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="px-4 py-2 text-gray-300">No categories available</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex items-center gap-2">
//           {isSearchOpen && (
//             <>
//               <input
//                 id="name"
//                 type="text"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//                 className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//                 placeholder="Search for Product"
//               />
//               <Link
//                 to={productName.trim() ? `/product/search/${productName}` : `/`}
//                 className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//               >
//                 Search
//               </Link>
//             </>
//           )}
//         </div>

//         {/* User and Cart Links */}
//         <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//           {user && (
//             <Link
//               to="/cart"
//               className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           )}
//           {isAdmin && (
//             <Link
//               className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//               to="/secret-dashboard"
//             >
//               <Lock className="inline-block mr-1" size={18} />
//               Dashboard
//             </Link>
//           )}
//           {user ? (
//             <button
//               className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               onClick={logout}
//             >
//               <LogOut size={18} />
//               <span className="hidden sm:inline ml-2">Log Out</span>
//             </button>
//           ) : (
//             <div className="flex space-x-4">
// 				<div className="hidden lg:flex items-center gap-2">
//           {isSearchOpen && (
//             <>
//               <input
//                 id="name"
//                 type="text"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//                 className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//                 placeholder="Search for Product"
//               />
//               <Link
//                 to={productName.trim() ? `/product/search/${productName}` : `/`}
//                 className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//               >
//                 Search
//               </Link>
//             </>
//           )}
//         </div>

// 				<button
//           onClick={handleSearchToggle}
//           className="hidden lg:block text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>
//               <Link
//                 to="/signup"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <UserPlus className="mr-2" size={18} />
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <LogIn className="mr-2" size={18} />
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Search Input */}
//       {isSearchOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-900 px-4 py-3 lg:hidden">
//           <div className="flex items-center gap-2">
//             <input
//               id="name"
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//               placeholder="Search for Product"
//             />
//             <Link
//               to={productName.trim() ? `/product/search/${productName}` : `/`}
//               className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//             >
//               Search
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// import { ShoppingCart, UserPlus, LogIn,User, LogOut, Lock, Menu, X, Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState, useEffect } from "react";
// import { useCategoryStore } from "../stores/useCategoryStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { categories, fetchAllCategory } = useCategoryStore();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search input (mobile)
//   const [productName, setProductName] = useState("");

//   useEffect(() => {
//     fetchAllCategory();
//   }, [fetchAllCategory]);

//   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-5 flex justify-between items-center">
//         {/* Mobile Toggle Button */}
//         <button
//           onClick={handleToggleMenu}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>
// 		<Link
//               to="/cart"
//               className="lg:hidden relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={21} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>

//         {/* Centered Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-emerald-400 flex items-center justify-center flex-grow"
//           style={{ fontFamily: "DraftWerk, sans-serif" }}
//         >
//           H A L A - C H E N N A I
//         </Link>

//         {/* Mobile Sign In Button */}
//         {!user && (
//           <Link
//             to="/login"
//             className="lg:hidden  hover:bg-gray-600 text-white py-1 px-3 rounded-md flex items-center transition duration-300 ease-in-out"
//           >
//             <User className="mr-1" size={18} />
//             {/* Sign In */}
//           </Link>
//         )}

//         {/* Mobile Search Icon */}
//         <button
//           onClick={handleSearchToggle}
//           className="lg:hidden text-white p-2 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>
//       </div>

//       {/* Navbar Links (Mobile and Desktop) */}
//       <nav
//         className={`lg:flex lg:justify-between lg:items-center ${isMenuOpen ? "block" : "hidden"} bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-0`}
//       >
//         <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
//           {/* Home Link */}
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* Categories Dropdown */}
//           <div
//             className="relative lg:inline-block"
//             onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
//             onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               Category
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <Link
//                       key={index}
//                       to={`/category/${category.name.toLowerCase()}`}
//                       className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
//                     >
//                       {category.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="px-4 py-2 text-gray-300">No categories available</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex items-center gap-2">
//           {isSearchOpen && (
//             <>
//               <input
//                 id="name"
//                 type="text"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//                 className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//                 placeholder="Search for Product"
//               />
//               <Link
//                 to={productName.trim() ? `/product/search/${productName}` : `/`}
//                 className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//               >
//                 Search
//               </Link>
//             </>
//           )}
//         </div>

//         {/* User and Cart Links */}
//         <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//           {user && (
//             <Link
//               to="/cart"
//               className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
//             >
//               <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
//               <span className="hidden sm:inline">Cart</span>
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           )}
//           {isAdmin && (
//             <Link
//               className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
//               to="/secret-dashboard"
//             >
//               <Lock className="inline-block mr-1" size={18} />
//               Dashboard
//             </Link>
//           )}
//           {user ? (
//             <button
//               className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               onClick={logout}
//             >
//               <LogOut size={18} />
//               <span className="hidden sm:inline ml-2">Log Out</span>
//             </button>
//           ) : (
//             <div className="flex space-x-4">
//               <Link
//                 to="/signup"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <UserPlus className="mr-2" size={18} />
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
//               >
//                 <LogIn className="mr-2" size={18} />
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Search Input */}
//       {isSearchOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-900 px-4 py-3 lg:hidden">
//           <div className="flex items-center gap-2">
//             <input
//               id="name"
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
//               placeholder="Search for Product"
//             />
//             <Link
//               to={productName.trim() ? `/product/search/${productName}` : `/`}
//               className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
//             >
//               Search
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import {
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Menu,
  Search,
} from "lucide-react";
import {
    HiOutlineUser,
} from "react-icons/hi"; // Using Heroicons
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState, useEffect } from "react";
import { useCategoryStore } from "../stores/useCategoryStore";
import ScrollingBanner from "./ScrollingBanner"; // Import the banner component

const Navbar = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const { categories, fetchAllCategory } = useCategoryStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenn, setIsDropdownOpenn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [navbarTop, setNavbarTop] = useState("top-10"); // Default navbar top offset

  useEffect(() => {
    fetchAllCategory();
  }, [fetchAllCategory]);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

  const handleBannerClose = () => {
    setNavbarTop("top-0"); // Adjust navbar position to 0 when banner is closed
  };

  return (
    <div>
      <ScrollingBanner onClose={handleBannerClose} />{" "}
      {/* Pass the close handler */}
      <header
        className={`fixed ${navbarTop} left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-20 transition-all duration-300 border-b border-emerald-800`}
      >
        <div className="lg:hidden container mx-auto h-12 px-4 py-5 flex justify-between items-center">
          {/* Mobile Toggle Button */}

          <button
            onClick={handleToggleMenu}
            className="lg:hidden text-white p-1 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          <Link
            to="/cart"
            className="lg:hidden relative group text-gray-300 hover:text-emerald-400 pl-2 py-2 px-21 rounded-md flex items-center transition duration-300 ease-in-out"
          >
            <ShoppingCart
              className="inline-block mr-1 group-hover:text-emerald-400"
              size={21}
            />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Centered Logo */}
          <Link
            to="/"
            className="lg:hidden text-xl font-semibold text-emerald-500 flex items-center justify-center flex-grow"
            style={{ fontFamily: "Roboto Slab, serif", letterSpacing: "0.5px" }}
          >
            Hala Chennai
          </Link>

          {!user?(<Link
            to="/login"
            className="lg:hidden  text-white py-2 px-21 rounded-md flex items-center transition duration-300 ease-in-out"
          >
            <UserPlus className="mr-2" size={20} />
            {/* Sign Up */}
          </Link>):(
            <Link to="/profile" className="flex flex-col items-center">
            <HiOutlineUser
                size={24}
                className={isActive("/profile") ? "text-emerald-500" : ""}
            />
        </Link>
          )}
          {/* Mobile Search Icon */}
          <button
            onClick={handleSearchToggle}
            className="lg:hidden text-white p-2 focus:outline-none"
          >
            <Search size={24} />
          </button>

          {/* Desktop Search Icon */}
          {/* <button
          onClick={handleSearchToggle}
          className="hidden lg:block text-white p-2 focus:outline-none"
        >
          <Search size={24} />
        </button> */}
        </div>

        {/* Navbar Links (Mobile and Desktop) */}
        <nav
          className={`lg:flex lg:justify-between lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          } bg-gray-900 lg:bg-transparent px-6 py-4 lg:py-3`}
        >
          <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
            {/* Home Link */}
            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative lg:inline-block"
              onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
              onMouseLeave={() => {
                // Delay dropdown close when leaving both button and dropdown
                if (!isMenuOpen) {
                  setTimeout(() => setIsDropdownOpen(false), 1000);
                }
              }}
            >
              <button
                onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
              >
                Category
              </button>
            </div>
          </div>
          <Link
            to="/"
            className="hidden lg:flex lg:text-4xl font-semibold text-emerald-500 flex items-center justify-center flex-grow"
            style={{ fontFamily: "Roboto Slab, serif", letterSpacing: "0.5px" }}
          >
            Hala Chennai
          </Link>

          {/* Desktop Search Bar */}
          {/* <div className="hidden lg:flex items-center gap-2">
          {isSearchOpen && (
            <>
              <input
                id="name"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Search for Product"
              />
              <Link
                to={productName.trim() ? `/product/search/${productName}` : `/`}
                className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
              >
                Search
              </Link>
            </>
          )}
        </div> */}

          {/* User and Cart Links */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {user && (
              <button
              onClick={handleSearchToggle}
              className="hidden lg:block text-white p-2 focus:outline-none"
            >
              <Search size={24} />
            </button>
            )}
            {user && (
          
              <Link
                to="/cart"
                className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-emerald-400"
                  size={20}
                />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            
            {isAdmin && (
              <Link
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                to="/secret-dashboard"
              >
                <Lock className="inline-block mr-1" size={18} />
                Dashboard
              </Link>
            )}
            {user ? (
              <button
                className="hidden bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <div className="flex space-x-4">
                <div className="hidden lg:flex items-center gap-2">
                  {isSearchOpen && (
                    <>
                      <input
                        id="name"
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                        placeholder="Search for Product"
                      />
                      <Link
                        to={
                          productName.trim()
                            ? `/product/search/${productName}`
                            : `/`
                        }
                        className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
                      >
                        Search
                      </Link>
                    </>
                  )}
                </div>

                <button
                  onClick={handleSearchToggle}
                  className="hidden lg:block text-white p-2 focus:outline-none"
                >
                  <Search size={24} />
                </button>

                {/* <Link
                to="/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
              >
                <UserPlus className="mr-2" size={18} />
                Sign Up
              </Link> */}
                {/* <Link
                to="/login"
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
              >
                <LogIn className="mr-2" size={18} />
                Login
              </Link> */}
              </div>
            )}
            {user ? (
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/signup"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 px-4 py-3 lg:hidden">
            <div className="flex items-center gap-2">
              <input
                id="name"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Search for Product"
              />
              <Link
                to={productName.trim() ? `/product/search/${productName}` : `/`}
                className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
              >
                Search
              </Link>
            </div>
          </div>
        )}
        {(isDropdownOpen || isDropdownOpenn) && (
        <div
          className="absolute w-full bg-gray-800 rounded-md shadow-lg z-10"
          onMouseEnter={() => !isMenuOpen && setIsDropdownOpenn(true)}
          onMouseLeave={() => !isMenuOpen && setIsDropdownOpenn(false)}
        >
          <div className="grid grid-cols-4 gap-4 p-4">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category.name.toLowerCase()}`}
                  onClick={() => setIsDropdownOpenn(false)}
                  className="block px-4 py-2 text-gray-300 hover:bg-emerald-400 hover:text-gray-900 transition duration-300"
                >
                  {category.name.trim().charAt(0).toUpperCase() +
                    category.name.trim().slice(1)}
                </Link>
              ))
            ) : (
              <p className="px-4 py-2 text-gray-300">No categories available</p>
            )}
          </div>
        </div>
      )}
      </header>
    </div>
  );
};

export default Navbar;
