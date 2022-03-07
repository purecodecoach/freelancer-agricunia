import React from "react";

const ProductsPage = () => {
  const products = [
    {
      image: "./images/about-3.jpg",
      title: "Pure Leave",
      price: 12345,
    },
    {
      image: "./images/about-4.jpg",
      title: "Pure Leave",
      price: 12345,
    },
    {
      image: "./images/about-3.jpg",
      title: "Pure Leave",
      price: 12345,
    },
    {
      image: "./images/about-4.jpg",
      title: "Pure Leave",
      price: 12345,
    },
  ];

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
      <div className="">
        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className=" font-normal text-base leading-4 text-gray-800">
              Filter
            </p>
          </div>
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing 18 products
          </p>
        </div>

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {products.map((items) => (
            <div className=" relative ">
              <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                <p className="text-xs leading-3 text-gray-800">New</p>
              </div>
              <div className=" relative group">
                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img
                  className=" w-full"
                  src={items.image}
                  alt="A girl Posing Img"
                />
                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                  <button className=" font-medium text-base leading-4 text-white bg-green-600 py-3 w-full">
                    Add to bag
                  </button>
                  <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                    Quick View
                  </button>
                </div>
              </div>
              <p className=" font-bold  text-xl leading-5 text-green-600 md:mt-6 mt-4">
                {items.title}
              </p>
              <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                ${items.price}
              </p>
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center">
          <button className=" hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-800 bg-green-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
