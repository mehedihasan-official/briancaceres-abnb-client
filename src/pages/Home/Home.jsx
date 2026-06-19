import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/hero-section-image.jpeg";
import homepageSuccess from "../../assets/homepage-success.svg";
import sliderImg3 from "../../assets/slider-img-3.jpg";
import sliderImg2 from "../../assets/slider-img-4.jpg";
import sliderImg1 from "../../assets/slider-img-1.jpg"

// Example images for the slider (replace with your actual image assets)
const sliderImages = [
  {
    src: sliderImg1,
    title: " Club Wyndham Bali Hai Villas ",
    location: " Princeville, HI ",
  },
  {
    src: sliderImg2,
    title: " Club Wyndham Great Smokies Lodge",
    location: "Sevierville, TN",
  },
  {
    src: sliderImg3,
    title: " Club Wyndham Austin ",
    location: "Austin, TX",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[700px] w-full overflow-hidden mb-12">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful vacation home"
            className="w-full h-full object-cover object-center"
          />
          <img
            src={heroImage}
            alt="Beautiful vacation home - mobile view"
            className="w-full h-full object-cover object-center md:hidden"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        <div className="relative h-full space-y-6 flex flex-col items-start justify-center text-center text-white px-4">
          <h1 className="text-5xl text-start md:text-5xl lg:text-6xl font-semibold mb-4">
            List your timeshare rentals
          </h1>
          <p className="text-xl text-start md:text-xl lg:text-2xl mb-8 max-w-2xl">
            It's never been easier to rent your timeshare. Sign up today and own your unused nights.
          </p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded text-lg transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Success Section */}
      <div className="my-20 md:text-center space-y-5 px-4">
        <img
          src={homepageSuccess}
          alt="Teamwork or service concept"
          className="mx-auto w-[300px] max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl font-bold text-[#048ea0] mb-2 uppercase">Achieve more together</p>
        <h2 className="text-5xl md:text-4xl font-semibold text-[#5634d0] mb-4">
          Your success is our expertise.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We'll handle listing, marketing, booking and payment. Plus, we only get paid when you do.
        </p>
      </div>

      {/* ✅ Carousel Section */}
      <div className="my-20 px-4 md:text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#5634d0]">In-demand Destinations</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Do you own property in one of these locations?
See where stays are in high demand!
        </p>

        {/* Arrow Buttons */}
        <div className="flex justify-start items-center gap-6">
          <button
            onClick={prevSlide}
            className="p-3  hover:bg-gray-300 rounded-full transition shadow-lg"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 text-white bg-blue-700 hover:bg-gray-300 rounded-full transition shadow-md"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider Images */}
        <div className="flex justify-center items-center mt-6">
          <div className="w-full max-w-4xl overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${sliderImages.length * 100}%` }}
            >
              {sliderImages.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w h-64 "
                    />
                    <div className="p-4 text-left">
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                      <p className="text-gray-500">{slide.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your content */}
      <div className="my-8">
        {/* Your existing search and category components */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;
