import React, { useState, useEffect } from "react";
import axios from "axios";

const Addresses = ({ openEditModal, openDeleteModal, addressId }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/addresses")
      .then((res) => setAddresses(res.data))
      .catch((err) => console.log(err));
  },[openEditModal, openDeleteModal]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Addresses</h2>

      {/* List of address cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="bg-white shadow-md rounded-md border border-black p-4 flex flex-col justify-between"
            style={{ minHeight: "10rem" }}
          >
            <div>
              <p className="text-gray-600">
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                  {address.street}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                  {address.city}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                  {address.state}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                  {address.country}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                  {address.postalCode}
                </span>
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              {/* Button to open edit address modal */}
              <button
                onClick={() => openEditModal(address._id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Edit
              </button>
              {/* Button to delete address */}
              <button
                onClick={() => openDeleteModal(address._id)}
                // onClick={openDeleteModal}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
