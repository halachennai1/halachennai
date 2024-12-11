import { useState, useEffect } from "react";
import { useOrderStore } from "../stores/useOrderStore";
import { useUserStore } from "../stores/useUserStore";
import { X } from "lucide-react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { fetchUserOrders, orders } = useOrderStore();
  const {  user: userInfo } = useUserStore();
  // const [orderHistory, setOrderHistory] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  // const [selectedOrderId, setSelectedOrderId] = useState(null);
  // const [user , setUser] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  // Simulate fetching user data and order history from API
  useEffect(() => {
    fetchUserOrders();
    // checkAuth();
    setUser(userInfo);
    // setOrderHistory(orders);
  }, [fetchUserOrders,userInfo]);
  console.log(orders, userInfo, "hi");

  // useEffect(() => {
  //   // Mock user data
  //   const mockUser = {
  //     name: "John Doe",
  //     email: "johndoe@example.com",
  //   };

  //   // Mock order history
  //   const mockOrders = [
  //     { id: 1, product: "Wireless Headphones", date: "2024-12-01", amount: "$59.99", status: "Delivered" },
  //     { id: 2, product: "Smartwatch", date: "2024-11-15", amount: "$199.99", status: "Dispatched" },
  //     { id: 3, product: "Laptop", date: "2024-10-30", amount: "$799.99", status: "Placed" },
  //   ];

  //   setUser(mockUser);
  //   setOrderHistory(mockOrders);
  // }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-10 p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Profile</h1>

      {/* User Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          User Details
        </h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* Order History */}
      <div>
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          Order History
        </h2>
        {orders.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-emerald-400 border-b border-gray-700">
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-2">Address</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => handleOrderClick(order)}
                    className="hover:bg-gray-700 transition-colors border-b border-gray-700"
                  >
                    <td className="py-2 px-4">{order._id}</td>
                    <td className="py-2 px-4">
                      <table className="w-full text-left">
                        <tbody>
                          {order.products.map((p, index) => (
                            <tr
                              key={p.product?._id}
                              className={
                                index > 0 ? "border-t border-gray-700" : ""
                              }
                            >
                              <td className="py-1 px-2 text-gray-400">
                                {index + 1}
                              </td>
                              <td className="py-1 px-2 text-gray-200">
                                <div className="ml-4 max-w-[150px] text-left">
                                  <div
                                    className="text-sm font-medium text-white"
                                    title={p.product?.name} // Shows full name on hover
                                  >
                                    {p.product?.name}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="py-2 px-4">{order.user?.name || "N/A"}</td>
                    <td className="py-2 px-4">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4">{order.status}</td>
                    <td className="py-1 px-2 text-gray-200">
                      <div className="ml-4 max-w-[150px] text-left">
                        <div
                          className="text-sm font-medium text-white"
                          title={order.address} // Shows full name on hover
                        >
                          {order.address}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-400">No orders available</p>
        )}
      </div>
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-1/2 h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-emerald-400">Order Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p>
              <strong>Order ID:</strong> {selectedOrder._id}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedOrder.user.name}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedOrder.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Address:</strong> {selectedOrder.address}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
          
            {/* Scrollable products list */}
            <div className="mt-4 h-[50vh] overflow-y-auto">
              <h3 className="text-xl text-emerald-400">Products:</h3>
              {selectedOrder.products.map((product) => (
                <div key={product._id} className="mt-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.product.image}
                      alt={product.product.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div>
                      <p>
                        <strong>Name:</strong> {product.product.name}
                      </p>
                      <p>
                        <strong>Size:</strong> {product.size}
                      </p>
                      {/* <p><strong>Color:</strong> {product.color}</p> */}

                      {/* Conditionally display customization if it's not an empty string */}
                      {product.customization && product.customization !== "" ? (
                        <p>
                          <strong>Customization:</strong>{" "}
                          {product.customization}
                        </p>
                      ) : null}

                      <p>
                        <strong>Quantity:</strong> {product.quantity}
                      </p>
                      <p>
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
