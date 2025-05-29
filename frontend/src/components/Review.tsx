import React, { useState } from "react";
import img1 from "../assets/customer1.jpg";
import img2 from "../assets/cutomer2.jpg";
import img3 from "../assets/customer3.jpg";
import { RiPlayReverseLargeFill } from "react-icons/ri";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Random Woman",
    location: "NY, USA",
    text: "Understated, but unforgettable. It feels like it was made for me",
    image: img1,
  },
  {
    name: "Random Man",
    location: "CA, USA",
    text: "A unique experience that resonated deeply with me.",
    image: img2,
  },
  {
    name: "Another Woman",
    location: "TX, USA",
    text: "Simplicity at its finest. I loved every moment.",
    image: img3,
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = testimonials[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="font-sans p-4 md:p-8 mx-auto">
      <h2 className="text-sm tracking-widest text-gray-400 mb-6 uppercase">
        Our Customers
      </h2>
      <div className="flex flex-row flex-wrap justify-between items-start gap-6 border-b-gray-400 border-b-1 py-8 ">
        <div className="flex-1 max-w-2/3">
          <div className="text-2xl md:text-5xl font-light leading-snug relative">
            <span
              style={{ fontFamily: "Coolvetica, sans-serif" }}
              className="text-5xl mr-2 align-top inline-block rotate-180"
            >
              ,,
            </span>
            {active.text}
          </div>
          <div className="text-gray-300 text-sm mt-8">
            <div>{active.name}</div>
            <div className="text-gray-500">{active.location}</div>
          </div>
        </div>
        <div className="flex flex-col self-center items-center justify-center gap-6 min-w-[80px]">
          {testimonials.map((person, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`${
                  index === activeIndex ? "block" : "invisible"
                } text-white text-xl bg-transparent focus:outline-none select-none`}
              >
                <RiPlayReverseLargeFill />
              </span>
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={person.image}
                  alt={person.name}
                  onClick={() => handleSelect(index)}
                  className={`w-10 h-10 opacity-50 border-transparent rounded-full object-cover cursor-pointer border-2 transition duration-300 transform ${
                    index === activeIndex
                      ? "opacity-100 scale-150"
                      : "scale-100"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
