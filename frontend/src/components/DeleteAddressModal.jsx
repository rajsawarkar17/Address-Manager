import React from "react";

function DeleteAddressModal({ handleDeleteAddress, handleCancelDelete, temp }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-50">
        <div className="text-center mx-auto max-w-md border border-gray-300 shadow-md p-6 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleDeleteAddress(temp)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Yes
            </button>
            <button
              onClick={handleCancelDelete}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteAddressModal;
