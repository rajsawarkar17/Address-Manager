import React, { useEffect } from "react";
import axios from "axios";

const EditAddressModal = ({
  closeEditModal,
  handleEditAddress,
  formData,
  setFormData,
  tempEdit,
}) => {
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/addresses/${tempEdit}`)
      .then((res) => {
        const { street, city, state, country, postalCode } = res.data;
        setFormData({ street, city, state, country, postalCode });
      })
      .catch((err) => {
        console.error("Error fetching address data:", err);
      });
  }, [tempEdit, setFormData]); 


  const { street, city, state, country, postalCode } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-50">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Edit Address</h2>
        <form
          className="space-y-4"
          onSubmit={() => handleEditAddress(tempEdit)}
        >
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={street}
            onChange={(e) => onChange(e)}
            required
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => onChange(e)}
            required
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={state}
            onChange={(e) => onChange(e)}
            required
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={country}
            onChange={(e) => onChange(e)}
            required
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder="PostalCode"
            name="postalCode"
            value={postalCode}
            onChange={(e) => onChange(e)}
            required
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              onClick={closeEditModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddressModal;
