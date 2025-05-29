import React from "react";
import vid3 from "../assets/vid3.mp4";
import img1 from "../assets/section3_pic1.jpg";
import img2 from "../assets/section3_pic2.jpg";
import img3 from "../assets/section3_pic3.jpg";
import Accordian from "./utils/Accordian";
import { ContextState } from "../context/Provider";


const Product = () => {
  const {setCartSelect}=ContextState();

  return (
    <div className=" text-white min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-medium  mb-20">
          Silhouette No. 1 - Vermilion
        </h1>

        <div className="flex flex-col lg:flex-row lg:h-[90vh]">
          <div className="w-full h-[40vh] lg:h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={vid3}
            />
          </div>

          <div className="w-full bg-white text-black p-8 flex flex-col justify-between h-full">
            <p className="hidden md:block text-sm font-medium mb-6 leading-relaxed max-w-md">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened finish, this piece captures
              presence without force. Worn here in the stillness of a city in
              motion.
            </p>


            <div className="w-full flex justify-around overflow-x-auto mb-6 pb-10 border-gray-400 border-b-2">
              <img className=" w-1/4" src={img1} alt="img1" />
              <img className=" w-1/4" src={img2} alt="img2" />
              <img className=" w-1/4" src={img3} alt="img3" />
            </div>

            <div className="text-2xl md:text-3xl font-medium mb-4 flex items-center gap-2 ">
              ₹ 7,999{" "}
              <span className="text-sm font-light ">
                MRP incl. of all taxes
              </span>
            </div>

            <div className="mb-6 text-gray-400 pb-10 border-gray-400 border-b-2">
              <p className="text-lg mb-2">
                Please select a size
                <span className="underline ml-3 cursor-pointer text-sm">
                  Size chart
                </span>
              </p>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-3 md:px-10 py-3 rounded-md bg-gray-200 text-lg"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button className="border border-black w-full md:w-1/2 py-3 text-lg rounded-md hover:bg-gray-100">
                Add to Cart
              </button>
              <button
                className="bg-black text-white hover:bg-gray-800 w-full py-3 text-lg rounded-md hover:bg-red-600 transition ease-in-out duration-300"
                onClick={() => setCartSelect(true)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-30 flex-col">
          <Accordian content="Size & Fit" />
          <Accordian content="Delivery & Returns" />
          <Accordian content="How This Was Made" />
        </div>
      </div>
    </div>
  );
};

export default Product;
