

const Home = () => {  
  


  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden mb-12">
        {/* Background Image - Replace with your actual image path */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful vacation home"
            className="w-full h-full object-cover object-center"
          />
          {/* Mobile-specific image - replace with a more vertical composition if needed */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Beautiful vacation home - mobile view"
            className="w-full h-full object-cover object-center md:hidden"
          />
        </div>
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            List your timeshare rentals
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
            It's never been easier to rent your timeshare.
Sign up today and own your unused nights.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Get Started
          </button>
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