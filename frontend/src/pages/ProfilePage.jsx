import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  // Simulate fetching user data and order history from API
  useEffect(() => {
    // Mock user data
    const mockUser = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    // Mock order history
    const mockOrders = [
      { id: 1, product: "Wireless Headphones", date: "2024-12-01", amount: "$59.99", status: "Delivered" },
      { id: 2, product: "Smartwatch", date: "2024-11-15", amount: "$199.99", status: "Dispatched" },
      { id: 3, product: "Laptop", date: "2024-10-30", amount: "$799.99", status: "Placed" },
    ];

    setUser(mockUser);
    setOrderHistory(mockOrders);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-10 p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Profile</h1>

      {/* User Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Order History */}
      <div>
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Order History</h2>
        {orderHistory.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-emerald-400 p-2">Order ID</th>
                <th className="border-b-2 border-emerald-400 p-2">Product</th>
                <th className="border-b-2 border-emerald-400 p-2">Date</th>
                <th className="border-b-2 border-emerald-400 p-2">Amount</th>
                <th className="border-b-2 border-emerald-400 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="border-b border-gray-700 p-2">{order.id}</td>
                  <td className="border-b border-gray-700 p-2">{order.product}</td>
                  <td className="border-b border-gray-700 p-2">{order.date}</td>
                  <td className="border-b border-gray-700 p-2">{order.amount}</td>
                  <td className={`border-b border-gray-700 p-2 ${
                    order.status === "Delivered" ? "text-green-500" :
                    order.status === "Dispatched" ? "text-yellow-500" :
                    "text-red-500"
                  }`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
