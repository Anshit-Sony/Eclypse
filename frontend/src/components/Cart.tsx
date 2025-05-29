import React, { useState } from 'react'
import { ContextState } from '../context/Provider';

const Cart = () => {
    const {setCartSelect}=ContextState();

  const [address, setAddress] =  useState({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Address saved:", address);
  };

  const handleCancel = () => {
    setAddress({
      firstName: "",
      lastName: "",
      street: "",
      apt: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="bg-white text-black p-4 md:p-8">
      <div>
        <span
          className="text-xl font-semibold cursor-pointer"
          onClick={() => setCartSelect(false)}
        >
          &lt;
        </span>
        <span className="ml-10 text-xl">Shipping Address</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        {/* Address Section */}
        <div className="w-full md:w-13/25 border-2 border-gray-400 p-6 rounded-lg">
          <div className="flex justify-start items-center gap-6 mb-5">
            <span className="inline-flex justify-center items-center w-6 h-6 border-2 rounded-[50%]">
              <span className="w-4 h-4 border-2 rounded-[50%]"></span>
            </span>
            <span>Add New Address</span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="w-full">
              <label className="block text-left mb-1">First Name</label>
              <input
                name="firstName"
                value={address.firstName}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 rounded w-full"
              />
            </div>
            <div className="w-full">
              <label className="block text-left mb-1">Last Name</label>
              <input
                name="lastName"
                value={address.lastName}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 rounded w-full"
              />
            </div>
          </div>

          <div className="mb-6 w-full">
            <label className="block text-left mb-1">Street Address</label>
            <input
              name="street"
              value={address.street}
              onChange={handleChange}
              className="w-full border-2 border-gray-400 p-3 rounded"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <div className="w-full">
              <label className="block text-left mb-1">Apt Number</label>
              <input
                name="apt"
                value={address.apt}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 rounded w-full"
              />
            </div>
            <div className="w-full">
              <label className="block text-left mb-1">State</label>
              <input
                name="state"
                value={address.state}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 rounded w-full"
              />
            </div>
            <div className="w-full">
              <label className="block text-left mb-1">Zip</label>
              <input
                name="zip"
                value={address.zip}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 rounded w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={handleCancel}
              className="w-full md:w-1/4 border-2 border-gray-400 p-3 rounded bg-gray-100 text-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full bg-black text-white p-3 rounded text-lg hover:bg-red-600 transition ease-in-out duration-300"
            >
              Save This Address
            </button>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full md:w-12/25 bg-gray-100 rounded-xl p-8 shadow-md text-lg text-gray-600">
          <p className="text-base md:text-2xl mb-4">
            By placing your order, you agree to our company{" "}
            <span className="text-black font-medium cursor-pointer">
              Privacy policy
            </span>{" "}
            and{" "}
            <span className="text-black font-medium cursor-pointer">
              Conditions of use
            </span>
            .
          </p>

          <hr className="my-6" />
          <h2 className="text-2xl text-black mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between mb-6">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>

          <hr className="mt-15 mb-4" />
          <div className="flex justify-between text-xl mb-6 text-black">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition ease-in-out duration-300">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart
