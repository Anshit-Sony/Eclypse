import React from "react";
import heroVideo from "../assets/vid1.mp4"; 

const HeroSection = () => {
  return (
    <section className="text-white px-4 md:px-8 py-12">
      <div className="flex justify-between items-baseline mb-6">
        <h1 className="font-[400] relative inline-block leading-none">
          <span className="text-7xl">Eclypse</span>
          <span className="absolute font-light text-[50px] -top-0 right-[-20px]">
            &reg;
          </span>
        </h1>

        <span className="text-sm">&copy; 2025</span>
      </div>

      <div className="relative mb-8">
        <video
          className="w-full md:h-[530px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p
          style={{ fontFamily: '"Helvetica Neue 55", sans-serif' }}
          className="absolute bottom-4 right-4 text-sm md:text-3xl px-3 py-1 rounded "
        >
          A silhouette worth remembering
        </p>
      </div>

      <p className="text-lg md:text-5xl leading-relaxed mb-6 max-w-3xl">
        Rooted in a philosophy of quiet luxury, our garments are designed to
        speak softly in cut, in movement, in presence.
      </p>

      <a
        href="#about"
        className="group w-full max-w-[240px] md:max-w-[300px] flex items-center border-b border-white text-lg md:text-2xl font-medium hover:bg-white hover:text-black transition-colors duration-300"
      >
        <span className="flex w-full items-center justify-between group-hover:justify-center transition-all duration-500">
          <span>Learn more about Eclypse</span>
          <span className="text-xl pl-2 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            &#8599;
          </span>
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
