import heroImage from "../../assets/homepage-hero-section-image.jpg"; // Adjust the path as necessary


const Home = () => {

  return (
    <div className="container mx-auto  md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden mb-12">
        {/* Background Image - Replace with your actual image path */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful vacation home"
            className="w-full h-full object-cover object-center"
          />
          {/* Mobile-specific image - replace with a more vertical composition if needed */}
          <img
            src={heroImage}
            alt="Beautiful vacation home - mobile view"
            className="w-full h-full object-cover object-center md:hidden"
          />
        </div>
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-start justify-center text-center text-white px-4">
          <h1 className="text-5xl text-start md:text-5xl lg:text-6xl font-semibold mb-4">
            List your timeshare rentals
          </h1>
          <p className="text-xl text-start md:text-xl lg:text-2xl mb-8 max-w-2xl">
            It's never been easier to rent your timeshare.
Sign up today and own your unused nights.</p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded text-lg transition duration-300">
            Get Started
          </button>
          </div>
        </div>
      </div>

      {/* Rest of your content */}
      <div className="my-8">
        {/* Your existing search and category components */}
        {/* ... */}
        
        {/* Your cards and pagination */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;