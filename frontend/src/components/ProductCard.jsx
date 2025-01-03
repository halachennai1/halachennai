import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const [showModal, setShowModal] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("");
  // const [selectedColor, setSelectedColor] = useState("");
//   const [customization, setCustomization] = useState("");
  const allImages = [product.image, ...(product.images || [])];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [selectedNextImage, setSelectedNextImage] = useState(allImages[1] || allImages[0]); // Default to first image if no next image
  const [selectedPrevImage, setSelectedPrevImage] = useState(allImages[allImages.length - 1] || allImages[0]); // Default to last image if no prev image
  const settings = {
    dots: allImages.length > 1, // Show dots only if there are multiple images
    infinite: allImages.length > 1,
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    // focusOnSelect: true, // Click to change image
    beforeChange: (current, next) => {
        // Update selected image when sliding
        setSelectedImage(allImages[next]);
      },
    //   afterChange: (index) => {
    //   // Update selected image after the change to ensure it's in sync with the slider
    //   setSelectedImage(allImages[index]);
    // },
    draggable: true,
  };
  const handleImageChange = (image) => {
    // Find the index of the selected image in the allImages array
    const currentIndex = allImages.indexOf(image);
  
    // Set the selectedImage to the clicked image
    setSelectedImage(allImages[currentIndex + 1] || allImages[0]);
  
    // Set the next image, or fallback to the first image if it's the last one
    setSelectedNextImage(allImages[currentIndex + 2] || allImages[0]);
  
    // Set the previous image, or fallback to the last image if it's the first one
    setSelectedPrevImage(allImages[currentIndex]);
  };
  

  // Array of all images (main + additional images)
  const [formData, setFormData] = useState({
    regularSizeval: "", 
    kidSizeval: "",
    customizableval: "",
    shoeSizeval: "",
  });

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    }
    console.log("user", user);
    // setSelectedColor("Red");
    // console.log(selectedColor);
    console.log(product.regularSize, {
      ...product,
      regularSizeval: formData.regularSizeval,
      kidSizeval: formData.kidSizeval,
      customizableval: formData.customizableval,
      shoeSizeval: formData.shoeSizeval,
      color: "Red",
      // Include customization if provided, otherwise send an empty string
    });
    if (
      (product.regularSize && !formData.regularSizeval) ||
      (product.kidSize && !formData.kidSizeval) ||
      (product.shoeSize && !formData.shoeSizeval)
    ) {
      toast.error("Please select a size", { id: "select-options" });
      return;
    }

    // Add the product with selected options and optional customization
    addToCart({
      ...product,
      regularSizeval: formData.regularSizeval,
      kidSizeval: formData.kidSizeval,
      customizableval: formData.customizableval,
      shoeSizeval: formData.shoeSizeval,
      color: "Red",
 // Include customization if provided, otherwise send an empty string
    });

    // toast.success("Product added to cart", { id: "cart-success" });
    // console.log("why");
    setShowModal(false);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-1000 shadow-lg">
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          className="object-cover w-full"
          src={product.image}
          alt="product image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p className="text-gray-700 text-lg mb-4">
            <span className="line-through text-red-500 mr-2">
              ₹{(product.price * 1.1).toFixed(2)}
            </span>
            Price: ₹{product.price}
          </p>
        </div>
        <button
          className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          onClick={() => setShowModal(true)}
        >
          <ShoppingCart size={22} className="mr-2" />
          View Details
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
          onClick={handleCloseModal} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-lg p-8 w-3/4 mt-16 max-h-[90%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left: Centered Product Image */}
              <div className="w-full md:w-1/2">
                {/* Main Image */}
                {/* <Slider {...settings}>
                  {allImages.map((image, index) => ( */}
                    
                       {/* <div key={index} onClick={() => handleImageChange(selectedImage)}> */}
                      <InnerImageZoom
                        src={selectedImage}
                        zoomSrc={selectedImage}
                        zoomType="hover"
                        zoomScale={1}
                        className="rounded-lg mb-4"
                        alt={product.name}
                      />
                    {/* </div> */}
                   {/* ))} 
                </Slider> */}
                {/* Sub Images */}
                <div className="flex space-x-2">
                  {allImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      onMouseEnter={() => setSelectedImage(image)}
                      className={`h-20 w-20 object-cover rounded-lg cursor-pointer transition duration-300 
                                            border-2 ${
                                              selectedImage === image
                                                ? "border-emerald-800"
                                                : "border-transparent"
                                            }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Product Details and Form */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {/* <p className="text-gray-700 text-lg mb-4">Price: ₹{product.price}</p> */}
                <p className="text-gray-700 text-lg mb-4">
                  <span className="line-through text-red-500 mr-2">
                    ₹{(product.price * 1.1).toFixed(2)}
                  </span>
                  Price: ₹{product.price}
                </p>

                {/* Size Selection
                <div className="mb-4">
                  <h4 className="text-black font-semibold mb-2">
                    Select Size:
                  </h4>
                  <div className="flex space-x-4">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedSize === size
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        } hover:bg-emerald-600 hover:text-white`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Regular Size Selection */}
                {product.regularSize && (
                  <div className="mb-4">
                    <h4 className="text-black font-semibold mb-2">
                      Regular Size:
                    </h4>
                    <div className="flex space-x-4">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              regularSizeval: size,
                            }))
                          }
                          className={`px-4 py-2 rounded-lg border ${
                            formData.regularSizeval === size
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 text-gray-700"
                          } hover:bg-emerald-600 hover:text-white`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

{product.kidSize && (
  <div className="mb-4">
    <h4 className="text-black font-semibold mb-2">Kid Size:</h4>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
        "16:3yrs",
        "18:5yrs",
        "20:7yrs",
        "22:8yrs",
        "24:9yrs",
        "26:10yrs",
        "28:11yrs",
        "30:12yrs",
        "32:13yrs",
        "34:14yrs",
      ].map((size) => (
        <button
          key={size}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              kidSizeval: size,
            }))
          }
          className={`w-full px-4 py-2 rounded-lg border text-center break-words ${
            formData.kidSizeval === size
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 text-gray-700"
          } hover:bg-emerald-600 hover:text-white`}
          style={{ wordWrap: "break-word" }}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
)}

                {/* Shoe Size Selection */}
                {product.shoeSize && (
                  <div className="mb-4">
                    <h4 className="text-black font-semibold mb-2">
                      Shoe Size:
                    </h4>
                    <div className="flex space-x-4">
                      {["7", "8", "9", "10", "11", "12"].map((size) => (
                        <button
                          key={size}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              shoeSizeval: size,
                            }))
                          }
                          className={`px-4 py-2 rounded-lg border ${
                            formData.shoeSizeval === size
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 text-gray-700"
                          } hover:bg-emerald-600 hover:text-white`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {/* <div className="mb-4">
                                    <h4 className="text-black font-semibold mb-2">Select Color:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`px-4 py-2 rounded-lg border ${
                                                    selectedColor === color
                                                        ? "bg-emerald-600 text-white"
                                                        : "bg-gray-100 text-gray-700"
                                                } hover:bg-emerald-600 hover:text-white`}
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>
                                </div> */}

                {/* Customization Text Field */}
                {product.customizable && (
                  <div className="mb-4">
                    <h3 className="text-black font-semibold mb-2">
                      Customization
                    </h3>
                    <h4 className="text-black font-semibold mb-2">
                      Enter Your Name & Number:
                    </h4>
                    <input
                      type="text"
                      className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter customization details (e.g., initials, text)"
                      value={formData.customizableval}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          customizableval: e.target.value,
                        }))
                      }
                    />
                    <p className="text-black font-semibold mb-2">
                      Note*: max 12 letters , max 2 numbers (Ex: RONALDO 7)
                    </p>
                  </div>
                )}

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700"
                >
                  Add to Cart
                </button>
                {/* Edit Product Link */}
                {user?.role == "admin" && (
                  <div className="mt-4 flex justify-center">
                    <Link
                      to={{
                        pathname: `/product/edit/${product._id}`,
                      }}
                      state={{ product }} // Passing the product object via state
                      className=" block w-full max-w bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 text-center"
                      title={product.name} // Shows full name on hover
                    >
                      Edit Product
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
