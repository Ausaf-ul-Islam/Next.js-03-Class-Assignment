import React from "react";

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="bg-black flex items-center justify-center py-20"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-white tracking-wide text-center uppercase">
          Future Cars Models
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Future Car 1 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://i.pinimg.com/736x/ac/00/c9/ac00c983b9171dfb4e8921698cc7f0f8.jpg"
              alt="Futuristic Electric Car"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Elysium GT</h3>
            <p className="text-gray-400">
              Experience unparalleled performance with the Elysium GT, a fully electric supercar designed for speed and efficiency. Equipped with AI-assisted driving and a 500-mile range on a single charge.
            </p>
          </div>

          {/* Future Car 2 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://i.pinimg.com/564x/2d/3d/a1/2d3da1b2b4e3aefdddd65a93b06b609c.jpg"
              alt="Autonomous Luxury Sedan"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Nebula S</h3>
            <p className="text-gray-400">
              The Nebula S is a fully autonomous luxury sedan that merges comfort with cutting-edge technology. Enjoy features like voice-activated controls, biometric security, and adaptive self-parking.
            </p>
          </div>

          {/* Future Car 3 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://i.pinimg.com/736x/aa/39/e4/aa39e4340d75e5ade73fc095da2a701a.jpg"
              alt="Solar-Powered SUV"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Solaris X</h3>
            <p className="text-gray-400">
              The Solaris X combines rugged off-road capabilities with solar-powered technology, making it the ideal SUV for eco-conscious adventurers. Charge on the go and explore without limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
