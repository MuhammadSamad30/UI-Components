"use client";
import React from "react";

interface Address {
  id: string;
  title: string;
  address: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

interface UserProfileProps {
  name: string;
  email: string;
  addresses: Address[];
  orders: Order[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  addresses,
  orders,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">
            Manage your account and track your orders.
          </p>
          <div className="mt-4">
            <p className="text-gray-800">
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Saved Addresses
          </h2>
          {addresses.length > 0 ? (
            <ul className="space-y-4">
              {addresses.map((address) => (
                <li
                  key={address.id}
                  className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-700">
                    {address.title}
                  </h3>
                  <p className="text-gray-600">{address.address}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No addresses saved yet.</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order History
          </h2>
          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border border-gray-200">Order ID</th>
                    <th className="p-3 border border-gray-200">Date</th>
                    <th className="p-3 border border-gray-200">Total</th>
                    <th className="p-3 border border-gray-200">Status</th>
                    <th className="p-3 border border-gray-200">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="p-3 border border-gray-200">{order.id}</td>
                      <td className="p-3 border border-gray-200">
                        {order.date}
                      </td>
                      <td className="p-3 border border-gray-200">
                        Rs. {order.total.toFixed(2)}
                      </td>
                      <td className="p-3 border border-gray-200">
                        {order.status}
                      </td>
                      <td className="p-3 border border-gray-200">
                        <a
                          href={`/order/${order.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          View Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">You have no orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;