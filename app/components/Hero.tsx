import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center text-white"
      style={{
        height: "100vh",
        backgroundImage: "url('https://i.pinimg.com/736x/e7/54/1c/e7541c73cf7215cab44a804cc79ab8de.jpg')", // Replace with your actual image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight uppercase text-white">
          Welcome to Car Store
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto capitalize text-gray-200">
          Your one-stop solution for all Future Branded Cars. Discover, innovate, and explore luxury cars built with AI technology.
        </p>
        <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
