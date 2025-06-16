import heroImage from "../../assets/homepage-hero-section-image.jpg"; // Adjust the path as necessary
import homepageSuccess from "../../assets/homepage-success.svg"; // Adjust the path as necessary

const Home = () => {
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

      {/* ✅ New Section Below Hero */}
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

      {/* Rest of your content */}
      <div className="my-8">
        {/* Your existing search and category components */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;
