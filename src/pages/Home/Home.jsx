import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/hero-section-image.jpeg";
import homepageSuccess from "../../assets/homepage-success.svg";
import sliderImg3 from "../../assets/slider-img-3.jpg";
import sliderImg2 from "../../assets/slider-img-4.jpg";
import sliderImg1 from "../../assets/slider-img-1.jpg";

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
    <div className="w-full">
      {/* Hero Section — full viewport width, no container constraint */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden mb-12">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Beautiful vacation home"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay 50–60% */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Centered content with fade-in animation */}
        <div
          className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-8"
          style={{ animation: "heroFadeIn 1s ease-out both" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl leading-tight">
            Turn Your Unused Vacation Ownership Into Income
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl text-white/90">
            List your unused vacations and connect with travelers looking for premium resort stays worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg text-lg transition duration-300">
              List My Vacation Stay
            </button>
            <button className="bg-white/20 hover:bg-white/30 border border-white text-white font-bold py-3 px-10 rounded-lg text-lg transition duration-300">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Page body stays in container */}
      <div className="container mx-auto">
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

        {/* Carousel Section */}
        <div className="my-20 px-4 md:text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#5634d0]">In-demand Destinations</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Do you own property in one of these locations?{"\n"}See where stays are in high demand!
          </p>

          <div className="flex justify-start items-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 hover:bg-gray-300 rounded-full transition shadow-lg"
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

          <div className="flex justify-center items-center mt-6">
            <div className="w-full max-w-4xl overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${sliderImages.length * 100}%`,
                }}
              >
                {sliderImages.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img src={slide.src} alt={slide.title} className="w-full h-64 object-cover" />
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
      </div>

      {/* Keyframe for hero fade-in */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
