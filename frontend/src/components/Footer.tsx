import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-1">
        Eclipse <MdOutlineArrowOutward className="text-sm" />
      </h1>

      <div className="flex justify-between gap-8">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-1 pt-10">
            {["Home", "About", "Buy"].map((item) => (
              <div key={item} className="flex items-center">
                <span className="text-sm">{item}</span>
                <span className="mx-1">/</span>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <span className="text-sm">Our Customers</span>
            <span className="mx-1">/</span>
          </div>
          <div>
            <span className="text-sm">Contacts</span>
          </div>
        </div>

        <div className="flex flex-col [1040px]:mr-[700px]">
          <div className="mb-10">
            <h2 className="font-light text-sm uppercase mb-2">Contact</h2>
            <p className="text-sm">+91123-456-7890</p>
          </div>
          <div>
            <h2 className="font-light text-sm uppercase mb-2">Email</h2>
            <p className="text-sm">eclipse@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <FaArrowCircleUp
            className="text-4xl cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <div className="text-[10px]">© Eclipse 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
