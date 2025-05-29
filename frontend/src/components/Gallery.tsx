import galleryVideo from "../assets/vid2.mp4";
import img1 from "../assets/section2_pic1.jpg";
import img2 from "../assets/section2_pic2.jpg";
import img3 from "../assets/section2_pic3.jpg";
import img4 from "../assets/logo.jpg";

const imageData = [
  {
    src: img1,
    alt: "img1",
    text: "Premium wool blend in signature vermilion",
  },
  {
    src: img2,
    alt: "img2",
    text: "Discreet side pockets with clean finish",
  },
  {
    src: img3,
    alt: "img3",
    text: "Hand cut and assembled in black batches",
  },
];

const Gallery = () => {
  return (
    <div className="p-4 md:px-8 py-30">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {/* Video */}
        <div className="col-span-3 md:col-span-2 md:h-[350px] h-auto">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={galleryVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image Items */}
        {imageData.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden md:h-[350px] h-auto"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xl md:text-4xl font-medium opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              {img.text}
            </div>
          </div>
        ))}

        {/* Logo */}
        <div className="relative group overflow-hidden hidden md:block md:h-[350px] h-auto">
          <img
            src={img4}
            alt="Black and White Logo"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-white text-4xl md:text-5xl font-semibold">
            Eclypse
            <span className="relative font-light text-[50px] -top-2 right-[-5px]">
              &reg;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
