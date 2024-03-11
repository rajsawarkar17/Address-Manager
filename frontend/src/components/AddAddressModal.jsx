import React from "react";

function Add({ closeAddModal, formData, setFormData, handleAddAddress }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-50">
      <div className="max-w-md mx-auto bg-white border border-gray-300 shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Address</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700"
            >
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Street"
              className="input-field"
              value={formData.street}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="input-field"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              className="input-field"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              className="input-field"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              className="input-field"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddAddress}
          >
             Add Address
          </button>
          <button
            onClick={closeAddModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
