import React from "react";

function Navbar({ openAddModal }) {
  return (
    <>
      {/* Button to open add address modal */}
      <div className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Address Updater</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Address
        </button>
      </div>
    </>
  );
}

export default Navbar;
