import React, { useContext, useState } from "react";
import store from "../../Context/context";
import ProductCard from "../ProductCard/ProductCard";

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const { productList, addProductHandler, logoutHandler } = useContext(store);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const formHandler = (e) => {
    e.preventDefault();
    addProductHandler(title, year);
    handleModalClose();
  };

  return (
    <div className="bg-white h-screen">
      <div className="fixed top-0 left-0 p-6">
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          onClick={handleModalOpen}
        >
          Add Product
        </button>
      </div>
      <div className="fixed top-0 right-0 p-6">
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 bg-white">
        {productList.length > 0 ? (
          productList.map((ele) => (
            <ProductCard
              title={ele.title}
              year={ele.year}
              username={ele.user}
            />
          ))
        ) : (
          <p className=" text-rose-500  m-auto text-center">No Product</p>
        )}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-black bg-opacity-75">
          <div className="m-auto bg-white py-10 px-10 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-medium mb-6">Add Product</h2>
            <form onSubmit={formHandler}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="bg-gray-200 border border-gray-400 p-2 w-full"
                  name="title"
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Year
                </label>
                <input
                  type="text"
                  className="bg-gray-200 border border-gray-400 p-2 w-full"
                  name="year"
                  onChange={(event) => setYear(event.target.value)}
                  value={year}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-red-600"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
