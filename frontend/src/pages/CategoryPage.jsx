// import { useEffect } from "react";
// import { useProductStore } from "../stores/useProductStore";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// const CategoryPage = () => {
// 	const { fetchProductsByCategory, products } = useProductStore();

// 	const { category } = useParams();
// 	console.log(useParams());

// 	useEffect(() => {
// 		fetchProductsByCategory(category);
// 	}, [fetchProductsByCategory, category]);

// 	console.log("products:", products);
// 	return (
// 		<div className='min-h-screen'>
// 			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
// 				<motion.h1
// 					className='text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8'
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					{category.charAt(0).toUpperCase() + category.slice(1)}
// 				</motion.h1>

// 				<motion.div
// 					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8, delay: 0.2 }}
// 				>
// 					{products?.length === 0 && (
// 						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
// 							No products found
// 						</h2>
// 					)}

// 					{products?.map((product) => (
// 					// 	<Link 
// 					// 	to={`/product/₹{product._id}`} 
// 					// 	key={product._id}
// 					// 	className="block hover:shadow-lg transition duration-300"
// 					// >
// 						<ProductCard key={product._id} product={product} />
// 					//{/* </Link> */}
						
// 					))}
// 				</motion.div>
// 			</div>
// 		</div>
// 	);
// };
// export default CategoryPage;


// import { useEffect } from "react";
// import { useProductStore } from "../stores/useProductStore";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProductCard from "../components/ProductCard";

// const CategoryPage = () => {
//   const { fetchProductsByCategory, products } = useProductStore();
//   const { category } = useParams();

//   useEffect(() => {
//     fetchProductsByCategory(category);
//   }, [fetchProductsByCategory, category]);

//   return (
//     <div className="min-h-screen">
//       <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
//         {/* Breadcrumb */}
       

//         {/* Category Title */}
//         <motion.div
//   className="mb-8 w-full relative"
//   initial={{ opacity: 0, y: -20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
// >
//   {/* Background Image or Color */}
//   <div className="w-full aspect-[16/9] bg-black">
//     {/* Optional: Add an image background or use bg-color */}
//   </div>

//   {/* Title */}
//   <h1 className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//     {category.charAt(0).toUpperCase() + category.slice(1)}
//   </h1>

//   {/* Breadcrumb */}
//   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 mb-4">
//     <Link to="/" className="hover:text-black">Home</Link> &gt;
//     <span className="text-gray-400"> {category.charAt(0).toUpperCase() + category.slice(1)}</span>
//   </div>
// </motion.div>



//         {/* Product Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {products?.length === 0 && (
//             <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
//               No products found
//             </h2>
//           )}

//           {products?.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;


import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { fetchProductsByCategory, products } = useProductStore();
  const { category } = useParams();

  // Pagination state: current page and products per page
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [fetchProductsByCategory, category]);

  // Calculate the start and end index for the current page of products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle next and previous page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="min-h-screen">
      <div className="relative z-10 w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 py-0">
        
        {/* Category Title */}
        <motion.div
  className="mb-8 w-full relative h-64" // Reduced height
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="w-full h-full bg-black" />
  <h1 className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    {category.charAt(0).toUpperCase() + category.slice(1)}
  </h1>

  <div className="absolute text-2xl bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 mb-4">
    <Link to="/" className="hover:text-black">Home</Link> &gt;
    <span className="text-gray-400"> {category.charAt(0).toUpperCase() + category.slice(1)}</span>
  </div>
</motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {currentProducts?.length === 0 && (
            <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
              No products found
            </h2>
          )}

          {currentProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* Prev Button */}
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-300 text-black rounded-l-lg hover:bg-gray-400"
          >
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <Link
                  key={pageNumber}
                  to={`?page=${pageNumber}`} // Optional: Add a query parameter for the page number
                  onClick={() => handlePageClick(pageNumber)}
                  className={`px-4 py-2 text-lg rounded-md ${
                    currentPage === pageNumber
                      ? "bg-emerald-400 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-300 text-black rounded-r-lg hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
