import React, { useState, useEffect } from "react";

import axios from "axios";
import AddAddressModal from "./components/AddAddressModal";
import EditAddressModal from "./components/EditAddressModal";
import Addresses from "./components/Addresses";
import DeleteAddressModal from "./components/DeleteAddressModal";
import Navbar from "./components/Navbar";

function AddressManager() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/addresses");
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [temp, setTemp] = useState("");
  const [tempEdit, setTempEdit] = useState("");

  // Function to open the add address modal
  const openAddModal = () => {
    setAddModalOpen(true);
    closeEditModal();
    closeDeleteModal();
    setFormData({
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    });
  };

  // Function to close the add address modal
  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const openDeleteModal = (addressId) => {
    closeAddModal();
    closeEditModal();
    setDeleteModalOpen(true);
    setTemp(addressId);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // Function to open the edit address modal
  const openEditModal = (addressId) => {
    closeAddModal();
    closeDeleteModal();
    // handleEditAddress(addressId);
    setEditModalOpen(true);
    setTempEdit(addressId);
  };

  // Function to close the edit address modal
  const closeEditModal = () => {
    setEditModalOpen(false);
  };


const handleEditAddress = async (addressId) => {
  try {
      // Fetch the current address data
      const response = await axios.get(`http://localhost:1337/api/addresses/${addressId}`);
      const currentAddressData = response.data;

      // Merge the current address data with the updated form data
      const updatedAddressData = { ...currentAddressData, ...formData };

      // Make the Axios request to update the address
      await axios.put(`http://localhost:1337/api/addresses/${addressId}`, updatedAddressData);

      console.log("Address updated successfully!");

      // Close the edit modal
      closeEditModal();
  } catch (error) {
      if (error.response) {
          console.error("Server responded with error:", error.response.data);
      } else if (error.request) {
          console.error("No response received from server:", error.request);
      } else {
          console.error("Error setting up request:", error.message);
      }
  }
};

const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);

      await axios.post("http://localhost:1337/api/addresses/", formData);

      console.log("Address added successfully!");
      setFormData({
        street: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      });
    } catch (error) {
      console.error("Error adding address:", error);
    }
    closeAddModal();
  };

  const handleDeleteAddress = async (addressId) => {
    console.log("Deleting address with ID:", addressId);
    try {
      await axios.delete(`http://localhost:1337/api/addresses/${addressId}`);
      setAddresses((addresses) =>
        addresses.filter((address) => address._id !== addressId)
      );
      console.log("Address Deleted");
      closeDeleteModal();
    } catch (err) {
      console.error("Error deleting address:", err);
    }
  };

  const handleCancelDelete = () => {
    closeDeleteModal();
  };

  return (
    <div>
      <Navbar openAddModal={openAddModal} />
      <Addresses
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      {/* Add address modal */}
      {isAddModalOpen && (
        <AddAddressModal
          closeAddModal={closeAddModal}
          handleAddAddress={handleAddAddress}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* Edit address modal */}
      {isEditModalOpen && (
        <EditAddressModal
          closeEditModal={closeEditModal}
          handleEditAddress={handleEditAddress}
          formData={formData}
          setFormData={setFormData}
          tempEdit={tempEdit}
        />
      )}

      {/* Delete address modal */}
      {isDeleteModalOpen && (
        <DeleteAddressModal
          handleDeleteAddress={handleDeleteAddress}
          handleCancelDelete={handleCancelDelete}
          temp={temp}
        />
      )}
    </div>
  );
}

export default AddressManager;
