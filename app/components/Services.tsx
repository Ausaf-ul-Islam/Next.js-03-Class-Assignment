import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-black flex items-center justify-center py-20"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-white tracking-wide text-center uppercase">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Service 1 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/07/26081339/all-about-car-detailing-process-body-b-260720211245-2-1024x640.jpg" // Replace with an actual car service image
              alt="Luxury Car Detailing"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Luxury Car Detailing</h3>
            <p className="text-gray-400">
              Our top-notch detailing service brings back the shine and glamour of your car, leaving it spotless inside and out.
            </p>
          </div>

          {/* Service 2 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://rivergatemuffler.com/wp-content/uploads/shutterstock_499116838.jpg" // Replace with an actual car service image
              alt="Engine Diagnostics"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Engine Diagnostics</h3>
            <p className="text-gray-400">
              Ensure optimal performance with our comprehensive engine diagnostics service, identifying issues before they become costly repairs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://fixedopsdigital.s3.amazonaws.com/oem/mitsubishi/service/tires/mitsubishi-service.jpg" // Replace with an actual car service image
              alt="Tire Replacement"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Tire Replacement</h3>
            <p className="text-gray-400">
              Our tire replacement service ensures a smooth and safe ride, using high-quality tires that suit your driving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
