"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  useEffect(() => {
    const item = searchParams.get("item");
    if (item) {
      setSelectedItem(JSON.parse(item));
    }
  }, [searchParams]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 lg:p-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Checkout
        </h1>

        {selectedItem ? (
          <div>
            {/* Display Selected Product */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Product Details
              </h2>
              <p className="text-gray-700">Name: {selectedItem.name}</p>
              <p className="text-gray-700">Quantity: {selectedItem.quantity}</p>
              <p className="text-gray-700">
                Price: Rs. {(selectedItem.price * selectedItem.quantity).toFixed(2)}
              </p>
            </div>

            {/* Payment Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Shipping Address
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your address"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No product selected for checkout.
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
